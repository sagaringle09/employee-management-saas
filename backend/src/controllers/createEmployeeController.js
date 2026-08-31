const {
  createEmployeeService,
  getEmployeesService,
  getEmployeeByIdService,
  updateEmployeeService,
  deactivateEmployeeService,
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
    // Pagination
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    // Search & Filters
    const search = req.query.search || "";
    const department = req.query.department || "";
    const status = req.query.status || "";

    // Sorting
    const sortBy = req.query.sortBy || "createdAt";
    const sortOrder = req.query.sortOrder || "desc";

    // Validate pagination
    if (page < 1 || limit < 1) {
      const error = new Error("Page and limit must be greater than 0");

      error.statusCode = 400;
      throw error;
    }

    // Call service
    const result = await getEmployeesService(
      page,
      limit,
      search,
      department,
      status,
      sortBy,
      sortOrder,
    );

    // Send response
    return res.status(200).json({
      success: true,
      data: result.data,
      pagination: result.pagination,
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

const updateEmployeeController = async (req, res, next) => {
  try {
    const id = req.params.id;
    const employeeData = req.body;

    const result = await updateEmployeeService(id, employeeData);

    return res.status(200).json({
      success: true,
      data: result.data,
    });
  } catch (error) {
    next(error);
  }
};

const deactivateEmployeeController = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await deactivateEmployeeService(id);

    return res.status(200).json({
      success: true,
      message: result.message,
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
  updateEmployeeController,
  deactivateEmployeeController,
};
