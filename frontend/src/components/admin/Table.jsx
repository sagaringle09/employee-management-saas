import { Search } from "lucide-react";

const Table = () => {
  return (
    <section className="mt-8 rounded-xl border border-slate-200 bg-white shadow-sm">
      {/* Section Header */}
      <div className="flex flex-col gap-4 border-b border-slate-200 p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            All Employees
          </h2>

          <p className="mt-1 text-sm text-emerald-600">Active Employees</p>
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

              <td className="px-5 py-4 text-sm text-slate-600">Engineering</td>

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

              <td className="px-5 py-4 text-sm text-slate-600">HR Manager</td>

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

              <td className="px-5 py-4 text-sm text-slate-600">UI Designer</td>

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
  );
};
export default Table;
