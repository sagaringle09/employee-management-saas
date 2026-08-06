const pool = require("../config/db");
const bcrypt = require("bcrypt");

const registerService = async (userData) => {
  // Extract data from the request
  const { firstName, lastName, email, password, role } = userData;

  //1. Check if email already exist
  const existingUser = await pool.query(
    "SELECT id FROM users WHERE email = $1",
    [email],
  );

  // If email already exists, stop here
  if (existingUser.rows.length > 0) {
    const error = new Error("Email already exists");
    error.statusCode = 409;
    throw error;
  }

  //2. hashed Password
  const hashedPassword = await bcrypt.hash(password, 10);

  //3. Insert User
  const newUser = await pool.query(
    `INSERT INTO users (first_name, last_name, email, password, role) VALUES ($1, $2, $3, $4, $5) RETURNING id, first_name, last_name, email, role`,
    [firstName, lastName, email, hashedPassword, role],
  );

  // 4. Return success result
  return {
    success: true,
    message: "User registered successfully",
    data: newUser.rows[0],
  };
};

module.exports = {
  registerService,
};
