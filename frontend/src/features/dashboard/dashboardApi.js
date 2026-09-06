import { apiSlice } from "@/services/apiSlice";

export const dashboardApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDashboardStats: builder.query({
      query: () => "/dashboard/stats",

      transformResponse: (response) => response.data,

      providesTags: ["Dashboard"],
    }),

    getRecentEmployees: builder.query({
      query: () => "/dashboard/recent-employees",

      transformResponse: (response) => response.data,

      providesTags: ["Dashboard"],
    }),

    getEmployeesByDepartment: builder.query({
      query: () => "/dashboard/department-stats",

      transformResponse: (response) => response.data,

      providesTags: ["Dashboard"],
    }),
  }),
});

export const {
  useGetDashboardStatsQuery,
  useGetRecentEmployeesQuery,
  useGetEmployeesByDepartmentQuery,
} = dashboardApi;
