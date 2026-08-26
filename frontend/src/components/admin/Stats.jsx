import { Users } from "lucide-react";

const Stats = () => {
  return (
    <section className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {/* Stat 1 */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
            <Users size={22} />
          </div>

          <div>
            <p className="text-sm text-slate-500">Total Employees</p>

            <p className="mt-1 text-2xl font-semibold text-slate-900">1,248</p>

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

            <p className="mt-1 text-2xl font-semibold text-slate-900">1,102</p>

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

            <p className="mt-1 text-2xl font-semibold text-slate-900">46</p>

            <p className="mt-1 text-xs font-medium text-red-600">
              ↓ 2% this month
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Stats;
