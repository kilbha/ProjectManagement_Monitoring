"use strict";

const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(morgan("combined"));
app.use(helmet());

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

// app.listen(() => console.log(`Users microservice running on PORT ${PORT}`))
startServer(PORT)
  .then((server) => {
    console.log(`Users microservice running on PORT ${PORT}`);
  })
  .catch((error) => {
    console.error("Error starting server:", error);
  });
