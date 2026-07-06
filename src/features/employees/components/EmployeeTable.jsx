import EmployeeRow from "./EmployeeRow";
import TableHeader from "../../../components/ui/table/TableHeader";

const EmployeeTable = ({ employees }) => {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-sm">
      <table className="w-full border-collapse">
        <TableHeader />
        <tbody>
          {employees.map((employee) => (
            <EmployeeRow key={employee.id} employee={employee} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default EmployeeTable;
