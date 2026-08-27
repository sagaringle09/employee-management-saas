const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/authMiddleware");
const authorizeRoles = require("../middlewares/roleMiddleware");
const {
  createEmployeeController,
  getEmployeesController,
  getEmployeeByIdController,
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
  authorizeRoles("admin", "hr", "manager"),
  getEmployeesController,
);
//Get employee
router.get(
  "/:id",
  authMiddleware,
  authorizeRoles("admin", "hr", "manager"),
  getEmployeeByIdController,
);

module.exports = router;
