const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(process.env.mongoURI)
    .then(() => {
      console.log("connected to mongodb successfully");
    })
    .catch((err) => {
      console.error("Error connecting to DB ", err);
    });
};

module.exports = connectDB;
