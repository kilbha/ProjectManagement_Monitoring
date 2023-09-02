'use strict'

const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");

const PORT = process.env.PORT || 3001
const app = express();

app.use(morgan('combined'));
app.use(helmet())

app.listen(() => console.log(`Users microservice running on PORT ${PORT}`))