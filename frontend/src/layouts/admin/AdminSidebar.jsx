import {
  Building2,
  LayoutDashboard,
  LogOut,
  Settings,
  Users,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const AdminSidebar = ({ handleLogout }) => {
  return (
    <aside className="hidden w-64 shrink-0 border-r border-slate-200 bg-white lg:flex lg:flex-col">
      {/* Logo */}
      <div className="flex h-20 items-center px-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-lg font-bold text-white">
          E
        </div>

        <div className="ml-3">
          <h2 className="text-lg font-bold text-slate-900">EmployeeHub</h2>
          <p className="text-xs text-slate-400">v1.0</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">
        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
          Menu
        </p>

        <div className="space-y-1">
          {/* Active */}
          <NavLink
            to="/admin"
            end
            className={({ isActive }) =>
              `flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${isActive ? "bg-violet-600 text-white" : "text-slate-500  hover:text-slate-900"}`
            }
          >
            <LayoutDashboard size={18} />
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="employees"
            className={({ isActive }) =>
              `flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${isActive ? "bg-violet-600 text-white" : "text-slate-500  hover:text-slate-900"}`
            }
          >
            <Users size={18} />
            <span>Employees</span>
          </NavLink>

          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 cursor-pointer"
          >
            <Building2 size={18} />
            <span>Departments</span>
          </button>

          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 cursor-pointer"
          >
            <Settings size={18} />
            <span>Settings</span>
          </button>
        </div>
      </nav>

      {/* Logout */}
      <div className="border-t border-slate-200 p-4">
        <button
          type="button"
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-500 transition hover:bg-red-50 hover:text-red-600"
        >
          <LogOut size={18} />
          <span onClick={handleLogout} className="cursor-pointer">
            Logout
          </span>
        </button>
      </div>
    </aside>
  );
};
export default AdminSidebar;
