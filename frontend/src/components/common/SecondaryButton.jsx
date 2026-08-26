const SecondaryButton = ({ children, type }) => {
  return (
    <button
      type={type}
      className="w-full h-12 rounded-xl bg-linear-to-r from-red-400 to-red-500 text-white font-semibold hover:opacity-90 cursor-pointer transition"
    >
      {children}
    </button>
  );
};
export default SecondaryButton;
