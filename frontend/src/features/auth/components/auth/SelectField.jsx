const SelectField = ({ register, name, error }) => {
  return (
    <div className="space-y-1">
      <select
        {...register(name)}
        className="w-full h-12 rounded-xl border border-gray-300 px-4 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
      >
        <option value="">Select Role</option>
        <option value="admin">Admin</option>
        <option value="hr">Hr</option>
        <option value="manager">Manager</option>
        <option value="employee">Employee</option>
      </select>
      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
};
export default SelectField;
