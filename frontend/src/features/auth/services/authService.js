import api from "../../../services/axios";

//====================== Register a New User ============================
const registerUser = async (userData) => {
  try {
    const response = await api.post("/auth/register", userData);

    return response.data;
  } catch (error) {
    const customError = new Error(
      error.response?.data?.message || "Registration failed",
      {
        cause: error,
      },
    );
    customError.status = error.response?.status;

    throw customError;
  }
};

//========================= Login User ===============================
const loginUser = async (userData) => {
  try {
    const response = await api.post("/auth/login", userData);

    return response.data;
  } catch (error) {
    const customError = new Error(
      error.response?.data?.message || "Login failed",
      {
        cause: error,
      },
    );

    customError.status = error.response?.status;

    throw customError;
  }
};

//============================= Get Current User ==========================
const getCurrentUser = async () => {
  try {
    const response = await api.get("/auth/me");
    return response.data;
  } catch (error) {
    const customError = new Error(
      error.response?.data?.message || "Failed restore session",
    );
    customError.status = error.response?.status;
    throw customError;
  }
};

export { registerUser, loginUser, getCurrentUser };
