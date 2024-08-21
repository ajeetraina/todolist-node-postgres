const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");
const sequelize = require('./db/index');

const app = express();

// Middleware to handle database connection and errors
app.use(async (req, res, next) => {
  try {
    await sequelize.authenticate();
    console.log('Connection to database has been established successfully.');
    next();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    res.status(500).json({ error: 'Failed to connect to the database' });
  }
});

// Define routes and other middleware here

app.listen(3000, () => {
  console.log("Server is up on port", 3000);
});
