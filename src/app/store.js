import { configureStore } from "@reduxjs/toolkit";
import { employeeApi } from "../features/employees/api/employeeApi";

export const store = configureStore({
  reducer: {
    [employeeApi.reducerPath]: employeeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(employeeApi.middleware),
});
