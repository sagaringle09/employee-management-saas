const {
  createEmployeeService,
  getEmployeesService,
} = require("../services/employeeService");

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

const getEmployeesController = async (req, res, next) => {
  try {
    // Call service to get employees
    const result = await getEmployeesService();

    // Send employees to client
    return res.status(200).json({
      success: true,
      data: result.data,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = { createEmployeeController, getEmployeesController };
