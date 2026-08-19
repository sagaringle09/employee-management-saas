const PrimaryButton = ({ children, type }) => {
  return (
    <button
      type={type}
      className="w-full h-12 rounded-xl bg-linear-to-r from-indigo-500 to-violet-600 text-white font-semibold hover:opacity-90 cursor-pointer transition"
    >
      {children}
    </button>
  );
};
export default PrimaryButton;
