const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors"); // Import the cors middleware
const authRoutes = require("./routes/auth");
const noteRoutes = require("./routes/noteRoutes");
const todoRoutes = require("./routes/todoRoutes");
const config = require("./config/config");

const app = express();

// Middleware
app.use(express.json());

// CORS middleware configuration to allow requests from the frontend origin
app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your frontend URL
    optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) choke on 204
  })
);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/notes", noteRoutes);
app.use("/api/todos", todoRoutes);

// Connect to MongoDB
mongoose
  .connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(5000, () => {
      console.log("Server is running on port 5000");
    });
  })
  .catch((err) => console.error("Error connecting to MongoDB:", err));
