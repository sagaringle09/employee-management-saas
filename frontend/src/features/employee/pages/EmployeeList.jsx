import { useEffect, useState } from "react";
import { deactivateEmployee, getEmployees } from "../services/employeeService";
import EmptyState from "@/components/common/EmptyState";
import { useNavigate } from "react-router-dom";
import { CirclePlus } from "lucide-react";
import ConfirmDialog from "../components/ConfirmDialog";
import EmployeeFilters from "../components/EmployeeFilters";
import EmployeeTable from "../components/EmployeeTable";
import EmployeePagination from "../components/EmployeePagination";

const EmployeeList = () => {
  const navigate = useNavigate();

  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
  const [deactivating, setDeactivating] = useState(false);
  const [success, setSuccess] = useState("");

  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  // Search Filter
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  // Department and Status Filter
  const [department, setDepartment] = useState("");
  const [status, setStatus] = useState("");
  // Shorting
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState("desc");

  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0,
  });

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  // Fetch employees
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        setLoading(true);
        setError("");

        const result = await getEmployees(
          page,
          limit,
          debouncedSearch,
          department,
          status,
          sortBy,
          sortOrder,
        );

        setEmployees(result.data);
        setPagination(result.pagination);
        if (
          result.pagination.totalPages > 0 &&
          page > result.pagination.totalPages
        ) {
          setPage(result.pagination.totalPages);
        }
      } catch (error) {
        setError(error.message || "Failed to fetch employees");
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, [page, limit, debouncedSearch, department, status, sortBy, sortOrder]);

  const handleConfirmDeactivate = async () => {
    try {
      setDeactivating(true);
      setError("");
      setSuccess("");

      await deactivateEmployee(selectedEmployeeId);

      const result = await getEmployees(page, limit, debouncedSearch);

      setEmployees(result.data);
      setPagination(result.pagination);

      setSelectedEmployeeId(null);

      setSuccess("Employee deactivated successfully");
    } catch (error) {
      setError(error.message || "Failed to deactivate employee");
    } finally {
      setDeactivating(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mt-6 mb-6 flex flex-col gap-4 sm:mt-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Employees</h1>

          <p className="text-md text-gray-500">
            Manage your organization's employees
          </p>
        </div>

        <button
          type="button"
          onClick={() => navigate("/admin/employees/new")}
          className="flex w-40 items-center gap-2 rounded-sm border border-gray-300 bg-green-500 px-3 py-1 text-sm font-medium text-white hover:bg-green-600"
        >
          <CirclePlus />
          <span>Add Employee</span>
        </button>
      </div>

      {/* Search Filter */}
      <EmployeeFilters
        search={search}
        setSearch={setSearch}
        department={department}
        setDepartment={setDepartment}
        status={status}
        setStatus={setStatus}
        sortBy={sortBy}
        setSortBy={setSortBy}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        setPage={setPage}
      />

      {/* Success */}
      {success && (
        <div className="mb-4 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
          {success}
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      {/* Results */}
      {loading ? (
        <div className="rounded-lg border border-gray-200 bg-white p-8 text-center">
          <p className="text-sm text-gray-500">Loading employees...</p>
        </div>
      ) : employees.length === 0 ? (
        <EmptyState
          title="No employees found"
          description="No employees match your search."
        />
      ) : (
        <EmployeeTable
          employees={employees}
          onDeactivate={setSelectedEmployeeId}
        />
      )}
      <EmployeePagination
        page={page}
        setPage={setPage}
        totalPages={pagination.totalPages}
      />

      {/* Confirmation Dialog */}
      {selectedEmployeeId && (
        <ConfirmDialog
          title="Deactivate Employee"
          message="Are you sure you want to deactivate this employee?"
          onConfirm={handleConfirmDeactivate}
          onCancel={() => setSelectedEmployeeId(null)}
          loading={deactivating}
        />
      )}
    </div>
  );
};
export default EmployeeList;
