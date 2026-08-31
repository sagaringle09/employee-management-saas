const AuthButton = ({ onClick, type, children }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className="border w-full h-12 rounded-xl bg-indigo-500 font-bold text-lg text-white hover:bg-indigo-600 cursor-pointer"
    >
      {children}
    </button>
  );
};
export default AuthButton;
