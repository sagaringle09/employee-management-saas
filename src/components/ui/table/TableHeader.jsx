const TableHeader = () => {
  return (
    <thead className="bg-gray-50">
      <tr>
        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
          Employee ID
        </th>
        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
          Name
        </th>
        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
          Email
        </th>
        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
          Department
        </th>
        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
          Status
        </th>
        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
          Actions
        </th>
      </tr>
    </thead>
  );
};
export default TableHeader;
