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
const getEmployeesService = async (
  page,
  limit,
  search,
  department,
  status,
  sortBy,
  sortOrder,
) => {
  const allowedSortColumns = {
    employeeName: "first_name",
    department: "department",
    joiningDate: "joining_date",
    createdAt: "created_at",
  };

  const sortColumn = allowedSortColumns[sortBy] || "created_at";

  const sortDirection = sortOrder === "asc" ? "ASC" : "DESC";

  const offset = (page - 1) * limit;

  // Store WHERE conditions
  const conditions = [];

  // Store query values
  const queryParams = [];

  // Search filter
  if (search) {
    queryParams.push(`%${search}%`);

    const searchParam = queryParams.length;

    conditions.push(`
      (
        employee_code ILIKE $${searchParam}
        OR first_name ILIKE $${searchParam}
        OR last_name ILIKE $${searchParam}
        OR email ILIKE $${searchParam}
      )
    `);
  }

  // Department filter
  if (department) {
    queryParams.push(department);

    const departmentParam = queryParams.length;

    conditions.push(`department = $${departmentParam}`);
  }

  // Status filter
  if (status) {
    queryParams.push(status);

    const statusParam = queryParams.length;

    conditions.push(`status = $${statusParam}`);
  }

  // Create WHERE clause
  const whereClause =
    conditions.length > 0 ? `WHERE ${conditions.join(" AND ")}` : "";

  // Pagination parameter positions
  const limitParam = queryParams.length + 1;
  const offsetParam = queryParams.length + 2;

  const dataParams = [...queryParams, limit, offset];

  // Get employees
  const result = await pool.query(
    `SELECT
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
      created_at
     FROM employees
     ${whereClause}
     ORDER BY ${sortColumn} ${sortDirection}
     LIMIT $${limitParam}
     OFFSET $${offsetParam}`,
    dataParams,
  );

  // Count matching employees
  const countResult = await pool.query(
    `SELECT COUNT(*) AS total
     FROM employees
     ${whereClause}`,
    queryParams,
  );

  const total = Number(countResult.rows[0].total);

  const totalPages = Math.ceil(total / limit);

  return {
    success: true,
    data: result.rows,
    pagination: {
      page,
      limit,
      total,
      totalPages,
    },
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

  // Check whether email belongs to another employee
  const existingEmployee = await pool.query(
    `SELECT id
     FROM employees
     WHERE email = $1
       AND id != $2`,
    [email, id],
  );

  if (existingEmployee.rows.length > 0) {
    const error = new Error("Email already exists");
    error.statusCode = 409;
    error.field = "email";
    throw error;
  }

  // Check whether employee code belongs to another employee
  const existingEmployeeCode = await pool.query(
    `SELECT id
     FROM employees
     WHERE employee_code = $1
       AND id != $2`,
    [employeeCode, id],
  );

  if (existingEmployeeCode.rows.length > 0) {
    const error = new Error("Employee code already exists");
    error.statusCode = 409;
    error.field = "employeeCode";
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
    // Database-level unique constraint
    if (error.code === "23505") {
      const customError = new Error("Email or employee code already exists");

      customError.statusCode = 409;

      throw customError;
    }

    throw error;
  }
};

// Delete Employee
const deactivateEmployeeService = async (id) => {
  const employee = await pool.query(
    `UPDATE employees SET status = $1 WHERE id = $2 RETURNING id, employee_code, first_name, last_name, email, phone, department, designation, salary, joining_date, status, created_at`,
    ["Inactive", id],
  );

  // Employee doesn't exist
  if (employee.rows.length === 0) {
    const error = new Error("Employee Not Found");
    error.statusCode = 404;
    throw error;
  }
  return {
    success: true,
    message: "Employee deactivated successfully",
    data: employee.rows[0],
  };
};

module.exports = {
  createEmployeeService,
  getEmployeesService,
  getEmployeeByIdService,
  updateEmployeeService,
  deactivateEmployeeService,
};
