const { registerService, loginService } = require("../services/authService");

const registerController = async (req, res, next) => {
  try {
    // Get data sent from React/Postman
    const userData = req.body;
    // Ask the service to register the user
    const result = await registerService(userData);

    // Registration successful
    return res.status(201).json({
      success: true,
      message: "User registered successfully",
    });
  } catch (error) {
    next(error);
  }
};

const loginController = async (req, res, next) => {
  try {
    // Get login credentials
    const userData = req.body;
    // Authenticate user
    const result = await loginService(userData);

    // Send JWT token and user details
    return res.status(200).json({
      success: true,
      message: "Login successful",
      token: result.token,
      user: result.user,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  registerController,
  loginController,
};
