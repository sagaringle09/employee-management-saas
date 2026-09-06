import { apiSlice } from "@/services/apiSlice";

export const employeeApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getEmployees: builder.query({
      query: (params) => ({
        url: "/employees",
        params,
      }),

      providesTags: ["Employee"],
    }),
  }),
});

export const { useGetEmployeesQuery } = employeeApi;
