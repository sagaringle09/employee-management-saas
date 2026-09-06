import Stats from "@/features/dashboard/components/Stats";
import RecentEmployees from "@/components/dashboard/RecentEmployees";
import DepartmentChart from "../components/DepartmentChart";
import {
  useGetDashboardStatsQuery,
  useGetEmployeesByDepartmentQuery,
  useGetRecentEmployeesQuery,
} from "../dashboardApi";

const AdminDashboard = () => {
  const {
    data: stats,
    isLoading: statsLoading,
    isError: statsIsError,
    refetch: refetchStats,
  } = useGetDashboardStatsQuery();

  const {
    data: recentEmployees,
    isLoading: recentEmployeesLoading,
    isError: recentEmployeesIsError,
    refetch: refetchRecentEmployees,
  } = useGetRecentEmployeesQuery();

  const {
    data: departmentStats,
    isLoading: departmentLoading,
    isError: departmentIsError,
    refetch: refetchDepartmentStats,
  } = useGetEmployeesByDepartmentQuery();

  return (
    <>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <Stats
          title="Total Employees"
          value={stats?.totalEmployees ?? 0}
          description="All employees"
          loading={statsLoading}
          error={statsIsError}
          onRetry={refetchStats}
        />
        <Stats
          title="Active Employees"
          value={stats?.activeEmployees ?? 0}
          description="Currently active"
          loading={statsLoading}
          error={statsIsError}
          onRetry={refetchStats}
        />
        <Stats
          title="Inactive Employees"
          value={stats?.inactiveEmployees ?? 0}
          description="Currently inactive"
          loading={statsLoading}
          error={statsIsError}
          onRetry={refetchStats}
        />

        <Stats
          title="Departments"
          value={stats?.totalDepartments ?? 0}
          description="Active departments"
          loading={statsLoading}
          error={statsIsError}
          onRetry={refetchStats}
        />
      </div>
      <RecentEmployees
        employees={recentEmployees ?? []}
        loading={recentEmployeesLoading}
        error={recentEmployeesIsError}
        onRetry={refetchRecentEmployees}
      />
      <DepartmentChart
        data={departmentStats ?? []}
        loading={departmentLoading}
        error={departmentIsError}
        onRetry={refetchDepartmentStats}
      />
    </>
  );
};

export default AdminDashboard;
