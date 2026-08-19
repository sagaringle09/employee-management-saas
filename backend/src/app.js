const express = require("express"); //import the Express
const cors = require("cors");
const app = express(); //Create the Express App
const authRoutes = require("./routes/authRoutes");
const errorMiddleware = require("./middlewares/errorMiddleware");

app.use(express.json()); //Enable JSON body parsing
//CORS
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);
app.use("/api/v1/auth", authRoutes);

//Add a test route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Employee Management SaaS Backend is Running 🚀",
  });
});

app.use(errorMiddleware);

module.exports = app; //Export the app
