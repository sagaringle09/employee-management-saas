const Button = ({ children, onClick }) => {
  return (
    <button
      className="flex items-center justify-center text-center px-4 py-2 rounded-md font-medium cursor-pointer transition-colors border"
      onClick={onClick} 
    >
      {children}
    </button>
  );
};
export default Button;
