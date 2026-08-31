import { Route, Routes } from "react-router-dom";
import Register from "../../features/auth/pages/Register";
import Login from "../../features/auth/pages/Login";
import ProtectedRoute from "./ProtectedRoute";
import EmployeeForm from "@/features/employee/pages/EmployeeForm";
import AdminLayout from "@/layouts/admin/AdminLayout";
import AdminDashboard from "@/features/dashboard/pages/AdminDashboard";
import EmployeeList from "@/features/employee/pages/EmployeeList";
import EmployeeDetails from "@/features/employee/pages/EmployeeDetails";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="employees" element={<EmployeeList />} />
          <Route path="employees/new" element={<EmployeeForm />} />
          <Route path="employees/:id" element={<EmployeeDetails />} />
          <Route path="employees/:id/edit" element={<EmployeeForm />   } />
        </Route>
      </Route>
    </Routes>
  );
};
export default AppRoutes;
