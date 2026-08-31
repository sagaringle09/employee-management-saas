const errorMiddleware = (error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  return res.status(statusCode).json({
    success: false,
    message: error.message || "Internal Server Error",
    field: error.field || null,
  });
};
module.exports = errorMiddleware;
