const express = require("express");
const router = express.Router();

const {
  registerController,
  loginController,
  getCurrentUserController,
} = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");

//Public Routes
router.post("/register", registerController);
router.post("/login", loginController);

//Protected Auth Route
router.get("/me", authMiddleware, getCurrentUserController);

module.exports = router;
