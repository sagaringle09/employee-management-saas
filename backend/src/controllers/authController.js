const { registerService } = require("../services/authService");

const registerController = async (req, res, next) => {
  try {
    // Get data sent from React/Postman
    const userData = req.body;
    // Ask the service to register the user
    const result = await registerService(userData);

    // Registration successful
    return res.status(201).json({
      success: true,
      message: result.message,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  registerController,
};
