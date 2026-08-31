const SecondaryButton = ({ children, type, onClick }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className="flex items-center gap-2 border border-gray-300 hover:text-white hover:bg-red-500 text-sm px-6 py-1.5 rounded-sm text-red-500 font-medium cursor-pointer"
    >
      {children}
    </button>
  );
};
export default SecondaryButton;
