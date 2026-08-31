const EmptyState = ({ title, description }) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-8 text-center">
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>

      <p className="mt-1 text-sm text-gray-500">{description}</p>
    </div>
  );
};
export default EmptyState;
