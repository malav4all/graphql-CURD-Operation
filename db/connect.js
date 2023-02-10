const mongoose = require("mongoose");
const dbOptions = {
  useNewUrlParser: true,
  poolSize: process.env.poolSize,
};
const connection = mongoose.connect(
  "mongodb://localhost:27017/graph",
  dbOptions,
  (err) => {
    if (err) {
      console.log("Error In Database connection");
    } else {
      console.log("Database Connected...");
    }
  }
);

module.exports = connection;
