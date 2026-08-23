const { createEmployeeService } = require("../services/employeeService");

const createEmployeeController = async (req, res, next) => {
  try {
    // Get Data send from React
    const employeeData = req.body;

    // Call the service
    const result = await createEmployeeService(employeeData);

    // Send success response
    return res.status(201).json({
      success: true,
      message: result.message,
      data: result.data,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { createEmployeeController };
