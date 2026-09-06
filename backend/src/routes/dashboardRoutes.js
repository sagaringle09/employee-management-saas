const express = require("express");

const router = express.Router();

const authMiddleware = require("../middlewares/authMiddleware");
const authorizeRoles = require("../middlewares/roleMiddleware");

const {
  getDashboardStatsController,
  getRecentEmployeesController,
  getEmployeesByDepartmentController,
} = require("../controllers/dashboardController");

router.get(
  "/stats",
  authMiddleware,
  authorizeRoles("admin", "hr", "manager"),
  getDashboardStatsController,
);

router.get(
  "/recent-employees",
  authMiddleware,
  authorizeRoles("admin", "hr", "manager"),
  getRecentEmployeesController,
);

router.get(
  "/department-stats",
  authMiddleware,
  authorizeRoles("admin", "hr", "manager"),
  getEmployeesByDepartmentController,
);

module.exports = router;
