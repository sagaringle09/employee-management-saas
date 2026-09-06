const {
  getDashboardStatsService,
  getRecentEmployeesService,
  getEmployeesByDepartmentService,
} = require("../services/dashboardService");

const getDashboardStatsController = async (req, res, next) => {
  try {
    const result = await getDashboardStatsService();

    return res.status(200).json({
      success: true,
      data: result.data,
    });
  } catch (error) {
    next(error);
  }
};

const getRecentEmployeesController = async (req, res, next) => {
  try {
    const result = await getRecentEmployeesService();

    return res.status(200).json({
      success: true,
      data: result.data,
    });
  } catch (error) {
    next(error);
  }
};

const getEmployeesByDepartmentController = async (req, res, next) => {
  try {
    const result = await getEmployeesByDepartmentService();

    const data = result.data.map((row) => ({
      department: row.department,
      employeeCount: Number(row.employee_count),
    }));

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getDashboardStatsController,
  getRecentEmployeesController,
  getEmployeesByDepartmentController,
};
