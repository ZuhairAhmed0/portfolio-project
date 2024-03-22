const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then(() => console.log("DB connection successfully!"))
    .catch((error) => console.log("DB connection error " + error.message));
};

module.exports = connectDB;
