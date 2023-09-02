"use strict";
require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const connectDB = require("./utils/db");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(morgan("combined"));
app.use(helmet());

// Corrected: Call the connectDB function
connectDB(); // <-- Invoke the function to connect to the database

const startServer = (port) => {
  return new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      resolve(server);
    });
    server.on("error", (error) => {
      reject(error);
    });
  });
};

startServer(PORT)
  .then((server) => {
    console.log(`Users microservice running on PORT ${PORT}`);
  })
  .catch((error) => {
    console.error("Error starting server:", error);
  });
