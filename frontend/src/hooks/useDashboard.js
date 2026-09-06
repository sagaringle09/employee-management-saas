import {
  getDashboardStats,
  getRecentEmployees,
  getEmployeesByDepartment,
} from "@/features/dashboard/services/dashboardService";
import { useCallback, useEffect, useState } from "react";

const useDashboard = () => {
  const [stats, setStats] = useState({
    totalEmployees: 0,
    activeEmployees: 0,
    inactiveEmployees: 0,
    totalDepartments: 0,
  });
  const [recentEmployees, setRecentEmployees] = useState([]);
  const [departmentStats, setDepartmentStats] = useState([]);

  const [statsLoading, setStatsLoading] = useState(true);
  const [recentEmployeesLoading, setRecentEmployeesLoading] = useState(true);
  const [departmentLoading, setDepartmentLoading] = useState(true);

  const [statsError, setStatsError] = useState("");
  const [recentEmployeesError, setRecentEmployeesError] = useState("");
  const [departmentError, setDepartmentError] = useState("");

  // Statistics
  const fetchStats = useCallback(async () => {
    setStatsError("");
    try {
      const response = await getDashboardStats();
      setStats(response.data);
    } catch (error) {
      console.error(error);
      setStatsError(error.message || "Failed to load dashboard statistics");
    } finally {
      setStatsLoading(false);
    }
  }, []);

  // Recent Employees
  const fetchRecentEmployees = useCallback(async () => {
    setRecentEmployeesError("");
    try {
      const response = await getRecentEmployees();
      setRecentEmployees(response.data);
    } catch (error) {
      console.error(error);
      setRecentEmployeesError(
        error.message || "Failed to load recent employees",
      );
    } finally {
      setRecentEmployeesLoading(false);
    }
  }, []);

  // Departments Stats
  const fetchDepartmentStats = useCallback(async () => {
    setDepartmentError("");
    try {
      const response = await getEmployeesByDepartment();
      setDepartmentStats(response.data);
    } catch (error) {
      console.error(error);
      setDepartmentError(
        error.message || "Failed to load department statistics",
      );
    } finally {
      setDepartmentLoading(false);
    }
  }, []);

  // const fetchDashboardData = useCallback(async () => {
  //   await Promise.allSettled([
  //     fetchStats(),
  //     fetchRecentEmployees(),
  //     fetchDepartmentStats(),
  //   ]);
  // }, [fetchStats, fetchRecentEmployees, fetchDepartmentStats]);

  useEffect(() => {
    fetchStats();
    fetchRecentEmployees();
    fetchDepartmentStats();
  }, [fetchStats, fetchRecentEmployees, fetchDepartmentStats]);

  return {
    stats,
    recentEmployees,
    departmentStats,

    statsLoading,
    recentEmployeesLoading,
    departmentLoading,

    statsError,
    recentEmployeesError,
    departmentError,

    fetchStats,
    fetchRecentEmployees,
    fetchDepartmentStats,
  };
};
export default useDashboard;
