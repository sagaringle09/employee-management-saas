const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/authMiddleware");
const authorizeRoles = require("../middlewares/roleMiddleware");
const {
  createEmployeeController,
  getEmployeesController,
} = require("../controllers/createEmployeeController");

// Admin &  HR can create employees
router.post(
  "/",
  authMiddleware,
  authorizeRoles("admin", "hr"),
  createEmployeeController,
);
// Get employees
router.get(
  "/",
  authMiddleware,
  authorizeRoles("admin","hr","manager"),
  getEmployeesController
)

module.exports = router;
