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

  return {
    success: true,
    data: result.rows[0],
  };
};

module.exports = {
  getDashboardStatsService,
};
