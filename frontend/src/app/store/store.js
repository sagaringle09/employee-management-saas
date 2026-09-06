import authReducer from "../../features/auth/authSlice";

import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "@/services/apiSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
