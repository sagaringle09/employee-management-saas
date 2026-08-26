const InputField = ({ type, placeholder, register, name, error }) => {
  return (
    <div className="space-y-1">
      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className="w-full h-12 rounded-xl border border-gray-300 px-4 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
      />

      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
};
export default InputField;

















