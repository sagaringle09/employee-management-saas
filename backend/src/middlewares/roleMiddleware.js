const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    // Attached the user to the request
    if (!req.user) {
      const error = new Error("User is not authenticated");
      error.statusCode = 401;
      return next(error);
    }

    // Check whether user's role is allowed
    if (!allowesRoles.includes(req.user.role)) {
      const error = new Error(
        "You do not have permission to perform this action",
      );
      error.statusCode = 403;
      return next(error);
    }

    // Role is allowed
    next();
  };
};

module.exports = authorizeRoles;
