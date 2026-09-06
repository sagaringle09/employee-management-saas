import { useNavigate } from "react-router-dom";

const RecentEmployees = ({ employees, loading, error, onRetry }) => {
  const navigate = useNavigate();
  return (
    <section className="mt-6 rounded-xl border border-gray-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            Recent Employees
          </h2>

          <p className="mt-1 text-sm text-gray-500">Recently added employees</p>
        </div>

        <button
          type="button"
          onClick={() => navigate("/admin/employees")}
          className="text-sm font-medium text-blue-600 hover:text-blue-700 cursor-pointer"
        >
          View All
        </button>
      </div>

      {/* Content */}
      {loading ? (
        <div className="flex items-center justify-center py-10">
          <p className="text-sm text-gray-500">Loading employees...</p>
        </div>
      ) : error ? (
        <div className="flex items-center justify-center py-10">
          <p className="text-sm text-red-500">{error}</p>
          <button
            type="button"
            onClick={onRetry}
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            Try Again
          </button>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-left">
            <thead>
              <tr className="border-b border-gray-200 text-sm text-gray-500">
                <th className="px-4 py-3 font-medium">Employee</th>
                <th className="px-4 py-3 font-medium">Department</th>
                <th className="px-4 py-3 font-medium">Designation</th>
                <th className="px-4 py-3 font-medium">Email</th>
                <th className="px-4 py-3 font-medium">Status</th>
              </tr>
            </thead>

            <tbody>
              {employees.length === 0 ? (
                <tr>
                  <td
                    colSpan={4}
                    className="px-4 py-8 text-center text-sm text-gray-500"
                  >
                    No employees found.
                  </td>
                </tr>
              ) : (
                employees.map((employee) => (
                  <tr
                    key={employee.id}
                    onClick={() => navigate(`/admin/employees/${employee.id}`)}
                    className="group cursor-pointer border-b border-gray-100 last:border-0 hover:bg-gray-50"
                  >
                    <td className="px-4 py-4">
                      <div>
                        <p className="font-medium text-gray-900 transition-colors group-hover:text-blue-600">
                          {employee.first_name} {employee.last_name}
                        </p>

                        <p className="text-sm text-gray-500">
                          {employee.employee_code}
                        </p>
                      </div>
                    </td>

                    <td className="px-4 py-4 text-sm text-gray-600">
                      {employee.department}
                    </td>

                    <td className="px-4 py-4 text-sm text-gray-600">
                      {employee.designation}
                    </td>

                    <td className="px-4 py-4 text-sm text-gray-600">
                      {employee.email}
                    </td>

                    <td className="px-4 py-4">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
                          employee.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-50 text-red-700"
                        }`}
                      >
                        {employee.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default RecentEmployees;
