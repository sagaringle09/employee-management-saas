const express = require("express"); //import the Express
const app = express(); //Create the Express App
const authRoutes = require("./routes/authRoutes");

app.use(express.json()); //Enable JSON body parsing
app.use("/api/v1/auth", authRoutes);
//Add a test route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Employee Management SaaS Backend is Running 🚀",
  });
});

module.exports = app; //Export the app
