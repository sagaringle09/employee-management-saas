import { removeToken } from "@/features/auth/utils/authStorage";
import {
  Search,
  LayoutDashboard,
  Users,
  Building2,
  Settings,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
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
              <button
                type="button"
                className="flex w-full items-center gap-3 rounded-lg bg-violet-600 px-3 py-2.5 text-sm font-medium text-white"
              >
                <LayoutDashboard size={18} />
                <span>Dashboard</span>
              </button>

              <button
                type="button"
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
              >
                <Users size={18} />
                <span>Employees</span>
              </button>

              <button
                type="button"
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
              >
                <Building2 size={18} />
                <span>Departments</span>
              </button>

              <button
                type="button"
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
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

        {/* ================= MAIN CONTENT ================= */}
        <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">
          {/* ================= HEADER ================= */}
          <header className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Greeting + Profile */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <h1 className="text-2xl font-semibold text-slate-900">
                  Hello, Sagar 👋
                </h1>

                <p className="mt-1 text-sm text-slate-500">
                  Welcome back to your dashboard
                </p>
              </div>

              {/* Profile */}
              <button
                type="button"
                className="flex shrink-0 items-center gap-2 rounded-lg p-1.5 transition hover:bg-slate-200 lg:hidden"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 text-sm font-semibold text-violet-700">
                  S
                </div>
              </button>
            </div>

            {/* Search + desktop profile */}
            <div className="flex items-center gap-3">
              <div className="flex w-full items-center rounded-lg border border-slate-200 bg-white px-3 shadow-sm focus-within:border-violet-500 focus-within:ring-2 focus-within:ring-violet-100 lg:w-80">
                <Search size={18} className="shrink-0 text-slate-400" />

                <input
                  type="text"
                  placeholder="Search employees..."
                  className="h-11 w-full bg-transparent px-2 text-sm text-slate-900 outline-none placeholder:text-slate-400"
                />
              </div>

              <button
                type="button"
                className="hidden shrink-0 items-center gap-2 rounded-lg p-1.5 transition hover:bg-slate-200 lg:flex"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 text-sm font-semibold text-violet-700">
                  S
                </div>

                <span className="text-sm font-medium text-slate-700">
                  Sagar
                </span>
              </button>
            </div>
          </header>

          {/* ================= STATS ================= */}
          <section className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {/* Stat 1 */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <Users size={22} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">Total Employees</p>

                  <p className="mt-1 text-2xl font-semibold text-slate-900">
                    1,248
                  </p>

                  <p className="mt-1 text-xs font-medium text-emerald-600">
                    ↑ 12% this month
                  </p>
                </div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <Users size={22} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">Active Employees</p>

                  <p className="mt-1 text-2xl font-semibold text-slate-900">
                    1,102
                  </p>

                  <p className="mt-1 text-xs font-medium text-emerald-600">
                    ↑ 8% this month
                  </p>
                </div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-600">
                  <Users size={22} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">On Leave</p>

                  <p className="mt-1 text-2xl font-semibold text-slate-900">
                    46
                  </p>

                  <p className="mt-1 text-xs font-medium text-red-600">
                    ↓ 2% this month
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ================= EMPLOYEE SECTION ================= */}
          <section className="mt-8 rounded-xl border border-slate-200 bg-white shadow-sm">
            {/* Section Header */}
            <div className="flex flex-col gap-4 border-b border-slate-200 p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">
                  All Employees
                </h2>

                <p className="mt-1 text-sm text-emerald-600">
                  Active Employees
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                {/* Table Search */}
                <div className="flex items-center rounded-lg border border-slate-200 px-3 focus-within:border-violet-500 focus-within:ring-2 focus-within:ring-violet-100">
                  <Search size={17} className="text-slate-400" />

                  <input
                    type="text"
                    placeholder="Search"
                    className="h-10 w-full bg-transparent px-2 text-sm outline-none placeholder:text-slate-400 sm:w-52"
                  />
                </div>

                {/* Sort */}
                <select className="h-10 rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-600 outline-none focus:border-violet-500">
                  <option>Newest</option>
                  <option>Oldest</option>
                  <option>Name A-Z</option>
                </select>
              </div>
            </div>

            {/* ================= TABLE ================= */}
            <div className="overflow-x-auto">
              <table className="min-w-225 w-full text-left">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="px-5 py-4 text-xs font-medium uppercase tracking-wide text-slate-400">
                      Employee
                    </th>

                    <th className="px-5 py-4 text-xs font-medium uppercase tracking-wide text-slate-400">
                      Department
                    </th>

                    <th className="px-5 py-4 text-xs font-medium uppercase tracking-wide text-slate-400">
                      Role
                    </th>

                    <th className="px-5 py-4 text-xs font-medium uppercase tracking-wide text-slate-400">
                      Email
                    </th>

                    <th className="px-5 py-4 text-xs font-medium uppercase tracking-wide text-slate-400">
                      Status
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {/* Row 1 */}
                  <tr className="border-b border-slate-100 transition hover:bg-slate-50">
                    <td className="px-5 py-4 text-sm font-medium text-slate-900">
                      Rahul Sharma
                    </td>

                    <td className="px-5 py-4 text-sm text-slate-600">
                      Engineering
                    </td>

                    <td className="px-5 py-4 text-sm text-slate-600">
                      Frontend Developer
                    </td>

                    <td className="px-5 py-4 text-sm text-slate-600">
                      rahul@company.com
                    </td>

                    <td className="px-5 py-4">
                      <span className="inline-flex rounded-md bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                        Active
                      </span>
                    </td>
                  </tr>

                  {/* Row 2 */}
                  <tr className="border-b border-slate-100 transition hover:bg-slate-50">
                    <td className="px-5 py-4 text-sm font-medium text-slate-900">
                      Priya Patel
                    </td>

                    <td className="px-5 py-4 text-sm text-slate-600">HR</td>

                    <td className="px-5 py-4 text-sm text-slate-600">
                      HR Manager
                    </td>

                    <td className="px-5 py-4 text-sm text-slate-600">
                      priya@company.com
                    </td>

                    <td className="px-5 py-4">
                      <span className="inline-flex rounded-md bg-red-50 px-3 py-1 text-xs font-medium text-red-700">
                        Inactive
                      </span>
                    </td>
                  </tr>

                  {/* Row 3 */}
                  <tr className="border-b border-slate-100 transition hover:bg-slate-50">
                    <td className="px-5 py-4 text-sm font-medium text-slate-900">
                      Amit Kumar
                    </td>

                    <td className="px-5 py-4 text-sm text-slate-600">Design</td>

                    <td className="px-5 py-4 text-sm text-slate-600">
                      UI Designer
                    </td>

                    <td className="px-5 py-4 text-sm text-slate-600">
                      amit@company.com
                    </td>

                    <td className="px-5 py-4">
                      <span className="inline-flex rounded-md bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                        Active
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
