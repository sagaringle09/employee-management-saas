const StatusBadge = ({ status }) => {
  const variants = {
    active: "bg-green-100 text-green-700 border-green-300 ",
    inactive: "bg-red-100 text-red-700 border-gray-300",
    pending: "bg-yellow-100 text-yellow-700 border-yellow-300 ",
  };

  const badgeClass =
    variants[status?.toLowerCase()] || "bg-gray-100 text-gray-600";
    
  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-medium 
      ${badgeClass}`}
    >
      {status}
    </span>
  );
};
export default StatusBadge;
