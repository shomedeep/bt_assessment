const express = require("express");
const bodyParser = require("body-parser");

const router = require("./routes/userRoute");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use("/api", router);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

module.exports = app;
