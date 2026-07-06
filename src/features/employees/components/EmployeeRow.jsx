import StatusBadge from "../../../components/ui/badge/StatusBadge";
import { SquarePen, Trash2 } from "lucide-react";
const EmployeeRow = ({ employee }) => {
  const { employeeId, name, email, department, status } = employee;
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
      <td className="px-6 py-4 text-sm text-gray-700">{employeeId}</td>
      <td className="px-6 py-4 font-medium text-gray-900">{name}</td>
      <td className="px-6 py-4 text-sm text-gray-700">{email}</td>
      <td className="px-6 py-4 text-sm text-gray-700">{department}</td>
      <td className="px-6 py-4">
        <StatusBadge status={status} />
      </td>
      <td className="px-6 py-4">
        <div className="flex gap-4">
          <button className="text-blue-600 hover:text-blue-800">
            <SquarePen />
          </button>

          <button className="text-red-600 hover:text-red-800">
            <Trash2 />
          </button>
        </div>
      </td>
    </tr>
  );
};
export default EmployeeRow;
