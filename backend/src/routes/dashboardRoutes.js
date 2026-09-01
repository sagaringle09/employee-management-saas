const express = require("express");

const router = express.Router();

const authMiddleware = require("../middlewares/authMiddleware");
const authorizeRoles = require("../middlewares/roleMiddleware");

const {
  getDashboardStatsController,
} = require("../controllers/dashboardController");

router.get(
  "/stats",
  authMiddleware,
  authorizeRoles("admin", "hr", "manager"),
  getDashboardStatsController,
);

module.exports = router;
