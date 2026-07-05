const EmployeeTable = ({ employees = [] }) => {
  return (
    <div>
      {employees.map((employee) => (
        <h3 key={employee.id}>{employee.name}</h3>
      ))}
    </div>
  );
};
export default EmployeeTable;
