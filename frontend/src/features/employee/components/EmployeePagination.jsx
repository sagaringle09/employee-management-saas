const EmployeePagination = ({ page, setPage, totalPages }) => {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="mt-6 flex items-center justify-between px-4 pb-4">
      <button
        type="button"
        onClick={() => setPage((currentPage) => currentPage - 1)}
        disabled={page === 1}
        className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Previous
      </button>

      <p className="text-sm text-gray-600">
        Page {page} of {totalPages}
      </p>

      <button
        type="button"
        onClick={() => setPage((currentPage) => currentPage + 1)}
        disabled={page === totalPages}
        className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default EmployeePagination;
