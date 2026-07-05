import EmptyState from "../../../components/comman/EmptyState";
import ErrorState from "../../../components/comman/ErrorState";
import Loader from "../../../components/comman/Loader";
import Button from "../../../components/ui/Button";

import { useGetEmployeesQuery } from "../api/employeeApi";

const EmployeeListPage = () => {
  const { data = [], isLoading, error } = useGetEmployeesQuery();

  if (isLoading) return <Loader />;
  if (error) return <ErrorState />;
  if (!data.length) return <EmptyState />;

  const handleAddEmployee = () => {};
  return (
    <div className="flex justify-between items-start px-6 py-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-gray-900">Employee List</h1>
        <p className="text-base text-gray-500">
          Manage employees, departments and company data
        </p>
      </div>

      <Button onClick={handleAddEmployee}>Add Employee</Button>
    </div>
  );
};
export default EmployeeListPage;
