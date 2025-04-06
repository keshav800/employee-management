const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// Connect to DB
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/feedback", require("./routes/feedbackRoutes"));

module.exports = app;
app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/reports", require("./routes/reportroutes"));
