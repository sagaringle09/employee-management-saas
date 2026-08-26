import api from "@/services/axios";

const createEmployee = async (employeeData) => {
  try {
    const response = await api.post("/employees", employeeData);

    return response.data;
  } catch (error) {
    const customError = new Error(
      error.response?.data?.message || "Employee creation failed",
    );
    customError.status = error.response?.status;
    throw customError;
  }
};

export { createEmployee };
