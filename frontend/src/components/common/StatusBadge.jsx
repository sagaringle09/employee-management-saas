const StatusBadge = ({ status }) => {
  const isActive = status === "Active";

  return (
    <span
      className={
        isActive
          ? "inline-flex rounded-md bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700"
          : "inline-flex rounded-md bg-red-50 px-3 py-1 text-xs font-medium text-red-700"
      }
    >
      {status}
    </span>
  );
};
export default StatusBadge;
