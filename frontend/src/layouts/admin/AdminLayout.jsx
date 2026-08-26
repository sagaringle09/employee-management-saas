import { Outlet, useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import { removeToken } from "@/features/auth/utils/authStorage";
import AdminHeader from "./AdminHeader";

const AdminLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="flex min-h-screen">
        {/* ================= SIDEBAR ================= */}
        <AdminSidebar handleLogout={handleLogout} />
        {/* ================= MAIN CONTENT ================= */}
        <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">
          {/* ================= HEADER ================= */}
          <AdminHeader />

          {/* ================= STATS ================= */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};
export default AdminLayout;
