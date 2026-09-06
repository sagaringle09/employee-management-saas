import { Users } from "lucide-react";

const Stats = ({ title, value, description, loading, error, onRetry }) => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
          <Users size={22} />
        </div>

        <div>
          <p className="text-sm text-slate-500">{title}</p>

          {loading ? (
            <div className="mt-3 h-9 w-20 animate-pulse rounded bg-gray-200" />
          ) : error ? (
            <div>
              <p className="mt-3 text-sm text-red-500">Unable to load</p>
              <button
                type="button"
                onClick={onRetry}
                className="mt-1 text-xs font-medium text-blue-600 hover:text-blue-700"
              >
                Try Again
              </button>
            </div>
          ) : (
            <p className="mt-1 text-2xl font-semibold text-slate-900">
              {value}
            </p>
          )}

          {description && (
            <p className="mt-1 text-xs font-medium text-emerald-600">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
export default Stats;
