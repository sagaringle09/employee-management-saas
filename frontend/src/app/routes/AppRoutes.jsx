import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import AdminLayout from "@/layouts/admin/AdminLayout";

const Register = lazy(() => import("../../features/auth/pages/Register"));
const Login = lazy(() => import("../../features/auth/pages/Login"));
const EmployeeForm = lazy(
  () => import("@/features/employee/pages/EmployeeForm"),
);
const AdminDashboard = lazy(
  () => import("@/features/dashboard/pages/AdminDashboard"),
);
const EmployeeList = lazy(
  () => import("@/features/employee/pages/EmployeeList"),
);
const EmployeeDetails = lazy(
  () => import("@/features/employee/pages/EmployeeDetails"),
);

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="employees" element={<EmployeeList />} />
            <Route path="employees/new" element={<EmployeeForm />} />
            <Route path="employees/:id" element={<EmployeeDetails />} />
            <Route path="employees/:id/edit" element={<EmployeeForm />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};
export default AppRoutes;
