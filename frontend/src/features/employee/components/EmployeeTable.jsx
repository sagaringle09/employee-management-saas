import { useNavigate } from "react-router-dom";
import StatusBadge from "@/components/common/StatusBadge";

const EmployeeTable = ({ employees, onDeactivate }) => {
  const navigate = useNavigate();

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white">
      <table className="min-w-200 w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold">
              Employee Code
            </th>

            <th className="px-4 py-3 text-left text-sm font-semibold">
              Employee
            </th>

            <th className="px-4 py-3 text-left text-sm font-semibold">
              Department
            </th>

            <th className="px-4 py-3 text-left text-sm font-semibold">
              Designation
            </th>

            <th className="px-4 py-3 text-left text-sm font-semibold">
              Status
            </th>

            <th className="px-4 py-3 text-left text-sm font-semibold">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id} className="border-t border-gray-200">
              <td className="px-4 py-3 text-sm">{employee.employee_code}</td>

              <td className="px-4 py-3 text-sm">
                {employee.first_name} {employee.last_name}
              </td>

              <td className="px-4 py-3 text-sm">{employee.department}</td>

              <td className="px-4 py-3 text-sm">{employee.designation}</td>

              <td className="px-4 py-3">
                <StatusBadge status={employee.status} />
              </td>

              <td className="px-4 py-3 text-sm">
                <div className="flex">
                  <button
                    type="button"
                    onClick={() => navigate(`/admin/employees/${employee.id}`)}
                    className="mr-2 cursor-pointer rounded-sm bg-amber-200 px-1 hover:bg-amber-500"
                  >
                    View
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      navigate(`/admin/employees/${employee.id}/edit`)
                    }
                    className="mr-2 cursor-pointer rounded-sm bg-green-200 px-1 hover:bg-green-500"
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    onClick={() => onDeactivate(employee.id)}
                    className="cursor-pointer rounded-sm bg-red-200 px-1 hover:bg-red-500"
                  >
                    Deactivate
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
