import { removeToken } from "@/features/auth/utils/authStorage";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/v1",
});

// Run BEFORE every API request ( Request Interceptor )
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    //If token exist, attach it to the request (Athorization Header)
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Run AFTER the backend sends a response ( Response Interceptor )
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    //Backend return 401 Unauthorized
    if (error.response?.status === 401) {
      //Remove invalid/expired token
      removeToken();

      //Redirect user to login
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);

export default api;
