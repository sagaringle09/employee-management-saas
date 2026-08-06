const { registerService } = require("../services/authService");

const registerController = async (req, res) => {
  try {
    // Get data sent from React/Postman
    const userData = req.body;
    // Ask the service to register the user
    const result = await registerService(userData);

    // If service says registration failed
    if (!result.success) {
      return res.status(409).json({
        success: false,
        message: result.message,
      });
    }

    // Registration successful
    return res.status(201).json({
      success: true,
      message: result.message,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  registerController,
};
