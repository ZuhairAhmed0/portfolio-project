const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
const port = process.env.PORT || 3500;

// confugratuion
require("dotenv").config({ path: "./config/.env" });

// connect to mongodb
connectDB();

// More Middlewares
app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/auth", require("./routes/authRoutes"));
app.use("/aboutme", require("./routes/aboutRoutes"));
app.use("/services", require("./routes/servicesRoutes"));
app.use("/projects", require("./routes/projectsRoutes"));
app.use("/messages", require("./routes/messagesRoutes"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
