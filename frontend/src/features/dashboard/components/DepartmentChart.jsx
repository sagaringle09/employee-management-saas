import { useNavigate } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const DepartmentChart = ({ data, loading, error, onRetry }) => {
  const navigate = useNavigate();
  return (
    <section className="mt-6 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-start justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Employees by Department
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Employee distribution across departments
          </p>
        </div>
        <button
          type="button"
          onClick={() => navigate("/admin/employees")}
          className="text-sm font-medium text-blue-600 hover:text-blue-700 cursor-pointer"
        >
          View All
        </button>
      </div>

      <div className="h-[300px] w-full">
        {loading ? (
          <div className="flex h-full items-center justify-center">
            <p className="text-sm text-gray-500">
              Loading department statistics...
            </p>
          </div>
        ) : error ? (
          <div className="flex h-full items-center justify-center">
            <p className="text-sm text-red-500">{error}</p>
            <button
              type="button"
              onClick={onRetry}
              className="text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              Try Again
            </button>
          </div>
        ) : data.length === 0 ? (
          <div className="flex h-full items-center justify-center">
            <p className="text-sm text-gray-500">
              No department data available.
            </p>
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              layout="vertical"
              margin={{
                top: 5,
                right: 20,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis type="number" />

              <YAxis type="category" dataKey="department" width={100} />

              <Tooltip />

              <Bar
                dataKey="employeeCount"
                name="Employees"
                radius={[0, 6, 6, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </section>
  );
};

export default DepartmentChart;
