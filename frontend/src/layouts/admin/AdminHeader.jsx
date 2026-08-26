import { Search } from "lucide-react";

const AdminHeader = () => {
  return (
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

          <span className="text-sm font-medium text-slate-700">Sagar</span>
        </button>
      </div>
    </header>
  );
};
export default AdminHeader;
