const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    //Read Authorization header
    const authHeader = req.Header.authorization;

    //Check if token is provided
    if (!authHeader) {
      const error = new Error("Access Denied. No token provided");
      error.statusCode = 401;
      throw error;
    }
    //Extract JWT token from "Bearer <token>"
    const token = authHeader.split(" ")[1];

    //Verfy JWT using secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    //Attach logged-in user information to request
    req.user = decoded;

    //continue to next middleware / controller
    next();
  } catch (error) {
    error.statusCode = error.statusCode || 401;
    next(error);
  }
};

module.exports = authMiddleware;
