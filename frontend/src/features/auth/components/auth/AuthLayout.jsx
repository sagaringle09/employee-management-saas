const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#F3E3EC] flex items-center justify-center">
      <div className="w-full max-w-5xl rounded-3xl bg-white shadow-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 bg-linear-to-br from-indigo-500 to-violet-600 flex items-center justify-center p-10">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold mb-3">EMS</h1>
              <p className="text-indigo-100">Employee Management System</p>
            </div>
          </div>
          <div className="md:w-1/2 md:p-10">{children}</div>
        </div>
      </div>
    </div>
  );
};
export default AuthLayout;
