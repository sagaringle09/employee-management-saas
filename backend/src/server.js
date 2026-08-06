require("dotenv").config();
const app = require("./app"); //import the app
const PORT = process.env.PORT || 5000; //Read the PORT from .env
const pool = require("./config/db");

const startServer = async () => {
  try {
    await pool.query("SELECT NOW()");
    console.log("Database is connected");
    //Start the Server with app.listen() if the Database is connected
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log("Database connection failed");
    console.error(error.message);
    //Exit the application if DB connection failed
    process.exit(1);
  }
};
startServer();
