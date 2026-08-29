const pool = require("../config/db");

const createEmployeeService = async (employeeData) => {
  // Extract All Field from employeeData
  const {
    employeeCode,
    firstName,
    lastName,
    email,
    phone,
    department,
    designation,
    salary,
    joiningDate,
  } = employeeData;

  // Check whether email already exists
  const existingEmployee = await pool.query(
    `SELECT id FROM employees WHERE email = $1`,
    [email],
  );

  // If email already exist stop here
  if (existingEmployee.rows.length > 0) {
    const error = new Error("Email already exists");
    error.statusCode = 409;
    throw error;
  }

  // Check whether  employeeCode already exists
  const existingEmployeeCode = await pool.query(
    `SELECT id FROM employees WHERE employee_code = $1`,
    [employeeCode],
  );

  //If employeeCode already exists stop here
  if (existingEmployeeCode.rows.length > 0) {
    const error = new Error("Employee code already exists");
    error.statusCode = 409;
    throw error;
  }

  // Save employee into database
  const newEmployee = await pool.query(
    `INSERT INTO employees(employee_code, first_name, last_name, email, phone, department, designation, salary, joining_date) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING id, employee_code, first_name, last_name, email, department, designation, status`,
    [
      employeeCode,
      firstName,
      lastName,
      email,
      phone,
      department,
      designation,
      salary,
      joiningDate,
    ],
  );

  // Return success result
  return {
    success: true,
    message: "Employee created successfully",
    data: newEmployee.rows[0],
  };
};

// Get All Employees
const getEmployeesService = async () => {
  const result = await pool.query(
    `SELECT id, employee_code, first_name, last_name, email, phone, department, designation, salary, joining_date, status, created_at FROM employees ORDER BY created_at DESC`,
  );
  return {
    success: true,
    data: result.rows,
  };
};

// Get Single Employee By Id
const getEmployeeByIdService = async (id) => {
  const employee = await pool.query(
    `SELECT id, employee_code, first_name, last_name, email, phone, department, designation, salary, joining_date, status, created_at FROM employees WHERE id = $1`,
    [id],
  );

  if (employee.rows.length === 0) {
    const error = new Error("Employee Not Found");
    error.statusCode = 404;
    throw error;
  }

  return {
    success: true,
    data: employee.rows[0],
  };
};

// Update Employee using id
const updateEmployeeService = async (id, employeeData) => {
  const {
    employeeCode,
    firstName,
    lastName,
    email,
    phone,
    department,
    designation,
    salary,
    joiningDate,
  } = employeeData;

  // Check whether email already belongs to another employee
  const existingEmployee = await pool.query(
    `SELECT id
     FROM employees
     WHERE email = $1 AND id != $2`,
    [email, id],
  );

  if (existingEmployee.rows.length > 0) {
    const error = new Error("Email already exists");
    error.statusCode = 409;
    throw error;
  }

  // Check whether employee code already belongs to another employee
  const existingEmployeeCode = await pool.query(
    `SELECT id
     FROM employees
     WHERE employee_code = $1 AND id != $2`,
    [employeeCode, id],
  );

  if (existingEmployeeCode.rows.length > 0) {
    const error = new Error("Employee code already exists");
    error.statusCode = 409;
    throw error;
  }

  try {
    const employee = await pool.query(
      `UPDATE employees
       SET
         employee_code = $1,
         first_name = $2,
         last_name = $3,
         email = $4,
         phone = $5,
         department = $6,
         designation = $7,
         salary = $8,
         joining_date = $9
       WHERE id = $10
       RETURNING
         id,
         employee_code,
         first_name,
         last_name,
         email,
         phone,
         department,
         designation,
         salary,
         joining_date,
         status,
         created_at`,
      [
        employeeCode,
        firstName,
        lastName,
        email,
        phone,
        department,
        designation,
        salary,
        joiningDate,
        id,
      ],
    );

    if (employee.rows.length === 0) {
      const error = new Error("Employee Not Found");
      error.statusCode = 404;
      throw error;
    }

    return {
      success: true,
      message: "Employee updated successfully",
      data: employee.rows[0],
    };
  } catch (error) {
    // PostgreSQL unique constraint violation
    if (error.code === "23505") {
      const customError = new Error("Email or employee code already exists");

      customError.statusCode = 409;
      throw customError;
    }

    throw error;
  }
};

module.exports = {
  createEmployeeService,
  getEmployeesService,
  getEmployeeByIdService,
  updateEmployeeService,
};
