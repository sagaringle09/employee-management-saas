const EmployeeFilters = ({
  search,
  setSearch,
  department,
  setDepartment,
  status,
  setStatus,
  sortBy,
  setSortBy,
  sortOrder,
  setSortOrder,
  setPage,
}) => {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      {/* Search */}
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
        placeholder="Search employees..."
        className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 sm:max-w-md"
      />

      {/* Department */}
      <select
        value={department}
        onChange={(e) => {
          setDepartment(e.target.value);
          setPage(1);
        }}
        className="rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none"
      >
        <option value="">All Departments</option>
        <option value="Engineering">Engineering</option>
        <option value="HR">HR</option>
        <option value="Finance">Finance</option>
        <option value="Sales">Sales</option>
      </select>

      {/* Status */}
      <select
        value={status}
        onChange={(e) => {
          setStatus(e.target.value);
          setPage(1);
        }}
        className="rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none"
      >
        <option value="">All Status</option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>

      {/* Sort By */}
      <select
        value={sortBy}
        onChange={(e) => {
          setSortBy(e.target.value);
          setPage(1);
        }}
        className="rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none"
      >
        <option value="createdAt">Created Date</option>
        <option value="employeeName">Employee Name</option>
        <option value="department">Department</option>
        <option value="joiningDate">Joining Date</option>
      </select>

      {/* Sort Order */}
      <select
        value={sortOrder}
        onChange={(e) => {
          setSortOrder(e.target.value);
          setPage(1);
        }}
        className="rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none"
      >
        <option value="desc">Descending</option>
        <option value="asc">Ascending</option>
      </select>
    </div>
  );
};

export default EmployeeFilters;
