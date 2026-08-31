const PrimaryButton = ({ children, type, onClick }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className="flex items-center gap-2 bg-white text-gray-900 hover:bg-green-500 hover:text-white border border-gray-300 text-sm px-6 py-1.5 rounded-sm font-medium cursor-pointer"
    >
      {children}
    </button>
  );
};
export default PrimaryButton;
