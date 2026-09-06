const errorMiddleware = (error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  return res.status(statusCode).json({
    success: false,
    message: statusCode === 500 ? "Internal Server Error" : error.message,
    field: error.field || null,
  });
};
module.exports = errorMiddleware;
