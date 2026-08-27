const {
  createEmployeeService,
  getEmployeesService,
  getEmployeeByIdService,
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

const getEmployeeByIdController = async (req, res, next) => {
  try {
    // Get id from  URL 
    const id = req.params.id;

    // Call service to get employee
    const result = await getEmployeeByIdService(id);

    // Send employee to client
    return res.status(200).json({
      success: true,
      data: result.data,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createEmployeeController,
  getEmployeesController,
  getEmployeeByIdController,
};
