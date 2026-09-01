const { getDashboardStatsService } = require("../services/dashboardService");

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

module.exports = {
  getDashboardStatsController,
};
