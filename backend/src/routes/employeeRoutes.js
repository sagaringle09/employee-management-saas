const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/authMiddleware");
const authorizeRoles = require("../middlewares/roleMiddleware");
const {
  createEmployeeController,
} = require("../controllers/createEmployeeController");

// Admin &  HR can create employees
router.post(
  "/",
  authMiddleware,
  authorizeRoles("admin", "hr"),
  createEmployeeController,
);

module.exports = router;
