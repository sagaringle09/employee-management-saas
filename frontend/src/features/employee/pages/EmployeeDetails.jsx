import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getEmployeeById } from "../services/employeeService";
import StatusBadge from "@/components/common/StatusBadge";
import {
  ArrowLeft,
  BadgeDollarSign,
  BriefcaseBusiness,
  Mail,
  Pencil,
  Phone,
  Trash,
  User,
  UserRound,
  UserRoundCog,
} from "lucide-react";
import { formatDate } from "@/utils/formatDate";
import PrimaryButton from "@/features/employee/components/PrimaryButton";
import SecondaryButton from "@/features/employee/components/SecondaryButton";

const EmployeeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Call the getEmployeeById API
  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const result = await getEmployeeById(id);
        setEmployee(result.data);
      } catch (error) {
        setError(error.message || "Failed to fetch employee");
      } finally {
        setLoading(false);
      }
    };
    fetchEmployee();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!employee) {
    return <p>Employee not found</p>;
  }

  return (
    <div className="mx-auto mt-8 max-w-5xl">
      <PrimaryButton onClick={() => navigate("/admin/employees")}>
        <ArrowLeft size={12} />
        <span>Back to Employees</span>
      </PrimaryButton>
      <div className="bg-white rounded-sm">
        {/* Heading */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between mt-4 p-2 border">
          {/* Profile */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="md:flex shrink-0 md:items-center gap-2 rounded-lg p-1.5 transition hidden "
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-violet-100 text-sm font-semibold text-sky-600">
                <UserRound size={50} />
              </div>
            </button>
            <div className="text-sm">
              <h1 className="text-2xl font-bold text-gray-900 ">
                {employee.first_name} {employee.last_name}
              </h1>
              <p className="mt-1 text-sm text-gray-500">
                {employee.employee_code} · {employee.designation}
              </p>
              <p className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                <Mail size={15} />
                {employee.email} ·
                <Phone size={15} />
                {employee.phone}
              </p>
            </div>
          </div>
          <div className="">
            <StatusBadge status={employee.status} />
            <div>
              <p className="mt-1 text-sm text-gray-500">Date Joined</p>
              <p className="text-sm text-gray-900">
                {formatDate(employee.joining_date)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Employee Information */}
      <div className="border mt-4 bg-white rounded-sm">
        {/* Personal Info */}
        <div className="">
          <p className="flex items-center gap-2 border-b p-2 text-sky-600 font-medium text-sm">
            <User size={15} />
            <span>Personal Information</span>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 border-b p-2 text-sm text-gray-900">
            <div>
              <p>Email</p>
              <p>{employee.email}</p>
            </div>
            <div>
              <p>Phone</p>
              <p>{employee.phone}</p>
            </div>
          </div>
        </div>

        {/* Employment Info */}
        <div className="">
          <p className="flex items-center gap-2 border-b p-2 text-sky-600 font-medium text-sm">
            <BriefcaseBusiness size={15} />
            <span>Employment Information</span>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 border-b p-2 text-sm text-gray-900">
            <div>
              <p>Department</p>
              <p>{employee.department}</p>
            </div>
            <div>
              <p>Designation</p>
              <p>{employee.designation}</p>
            </div>
          </div>
        </div>

        {/* Compensation & Joining */}
        <div className="">
          <p className="flex items-center gap-2 border-b p-2 text-sky-600 font-medium text-sm">
            <BadgeDollarSign size={15} />
            <span> Compensation & Joining</span>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 border-b p-2 text-sm text-gray-900">
            <div>
              <p>Salary</p>
              <p>{employee.salary}</p>
            </div>
            <div>
              <p>Joining Date</p>
              <p>{formatDate(employee.joining_date)}</p>
            </div>
          </div>
        </div>

        {/* Account Information */}
        <div className="">
          <p className="flex items-center gap-2 border-b p-2 text-sky-600 font-medium text-sm">
            <UserRoundCog size={15} />
            <span>Account Information</span>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 p-2 text-sm text-gray-900">
            <div>
              <p>Employee Code</p>
              <p>{employee.employee_code}</p>
            </div>
            <div>
              <p>Account Status</p>
              <StatusBadge status={employee.status} />
            </div>
          </div>
        </div>

        {/* Created at */}
        <div className="p-2 text-sm text-gray-900">
          <p>Created At</p>
          <p>{formatDate(employee.created_at)}</p>
        </div>
      </div>

      {/* Edit and Delete */}
      <div className="flex gap-2 justify-end mt-4">
        <PrimaryButton
          onClick={() => navigate(`/admin/employees/${employee.id}/edit`)}
        >
          <Pencil size={12} />
          <span>Edit Employee</span>
        </PrimaryButton>
        <SecondaryButton>
          <Trash size={12} />
          <span>Delete Employee</span>
        </SecondaryButton>
      </div>
    </div>
  );
};
export default EmployeeDetails;
