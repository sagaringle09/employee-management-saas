import api from "@/services/axios";

// Create Employee
const createEmployee = async (employeeData) => {
  try {
    const response = await api.post("/employees", employeeData);

    return response.data;
  } catch (error) {
    const customError = new Error(
      error.response?.data?.message || "Employee creation failed",
    );
    customError.status = error.response?.status;
    customError.field = error.response?.data?.field;
    throw customError;
  }
};

// Get Employees
const getEmployees = async (
  page = 1,
  limit = 10,
  search = "",
  department = "",
  status = "",
  sortBy = "created_at",
  sortOrder = "desc",
) => {
  try {
    const params = new URLSearchParams({
      page: String(page),
      limit: String(limit),
      search,
      department,
      status,
      sortBy,
      sortOrder,
    });

    const response = await api.get(`/employees?${params.toString()}`);
    return response.data;
  } catch (error) {
    const customError = new Error(
      error.response?.data?.message || "Failed to fetch employees",
    );
    customError.status = error.response?.status;
    throw customError;
  }
};

// Get Employee By Id
const getEmployeeById = async (id) => {
  try {
    const response = await api.get(`/employees/${id}`);
    return response.data;
  } catch (error) {
    const customError = new Error(
      error.response?.data?.message || "Failed to fetch employee",
    );
    customError.status = error.response?.status;
    throw customError;
  }
};

// Update Employee
const updateEmployee = async (id, employeeData) => {
  try {
    const response = await api.patch(`/employees/${id}`, employeeData);
    return response.data;
  } catch (error) {
    const customError = new Error(
      error.response?.data?.message || "Employee Update Failed",
    );
    customError.status = error.response?.status;
    customError.field = error.response?.data?.field;
    throw customError;
  }
};

// Deactivate Employee
const deactivateEmployee = async (id) => {
  try {
    const response = await api.patch(`/employees/${id}/deactivate`);
    return response.data;
  } catch (error) {
    const customError = new Error(
      error.response?.data?.message || "Failed to deactivate employee",
    );

    customError.status = error.response?.status;

    throw customError;
  }
};

export {
  createEmployee,
  getEmployees,
  getEmployeeById,
  updateEmployee,
  deactivateEmployee,
};
