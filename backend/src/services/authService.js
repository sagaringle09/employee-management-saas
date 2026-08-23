const pool = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//============================== Register Service =================================
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

  // Save user into database
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

//============================== Login Service ==========================================
const loginService = async (userData) => {
  //Extract email and password
  const { email, password } = userData;

  //Find user by email
  const existingUser = await pool.query(
    "SELECT id, first_name, last_name, email, password, role FROM users WHERE email = $1",
    [email],
  );

  //If user not found
  if (existingUser.rows.length === 0) {
    const error = new Error("Invalid email or password");
    error.statusCode = 401;
    throw error;
  }
  //Get the user object
  const user = existingUser.rows[0];

  //Compare password using bcrypt
  const isPasswordValid = await bcrypt.compare(password, user.password);

  //If password Incorrect Throw error
  if (!isPasswordValid) {
    const error = new Error("Invalid email or password");
    error.statusCode = 401;
    throw error;
  }

  //If password Correct Generate JWT
  const token = jwt.sign(
    {
      id: user.id,
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    },
  );

  //Return logic result
  return {
    token,
    user: {
      id: user.id,
      role: user.role,
    },
  };
};

//================================ Current User Service =========================================
const getCurrentUserService = async (userId) => {
  const currentUser = await pool.query(
    `SELECT id, first_name, last_name, email, role FROM users WHERE id = $1`,
    [userId],
  );
  return currentUser.rows[0];
};

module.exports = {
  registerService,
  loginService,
  getCurrentUserService,
};
