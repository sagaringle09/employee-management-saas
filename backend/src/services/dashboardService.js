const pool = require("../config/db");

const getDashboardStatsService = async () => {
  const result = await pool.query(`
    SELECT
      COUNT(*) AS total_employees,
      COUNT(*) FILTER (
        WHERE status = 'Active'
      ) AS active_employees,
      COUNT(*) FILTER (
        WHERE status = 'Inactive'
      ) AS inactive_employees,
      COUNT(DISTINCT department) AS total_departments
    FROM employees
  `);

  const row = result.rows[0];

  return {
    success: true,
    data: {
      totalEmployees: Number(row.total_employees),
      activeEmployees: Number(row.active_employees),
      inactiveEmployees: Number(row.inactive_employees),
      totalDepartments: Number(row.total_departments),
    },
  };
};

const getRecentEmployeesService = async () => {
  const result = await pool.query(`
    SELECT
      id,
      employee_code,
      first_name,
      last_name,
      email,
      department,
      designation,
      status,
      created_at
    FROM employees
    ORDER BY created_at DESC
    LIMIT 5
  `);

  return {
    success: true,
    data: result.rows,
  };
};

const getEmployeesByDepartmentService = async () => {
  const result = await pool.query(`
    SELECT
      department,
      COUNT(*) AS employee_count
    FROM employees
    GROUP BY department
    ORDER BY employee_count DESC
  `);

  return {
    success: true,
    data: result.rows,
  };
};

module.exports = {
  getDashboardStatsService,
  getRecentEmployeesService,
  getEmployeesByDepartmentService,
};
