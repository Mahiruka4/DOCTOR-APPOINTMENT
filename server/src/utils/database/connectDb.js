const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.hyvefoj.mongodb.net/?retryWrites=true&w=majority`;
mongoose
  .connect("mongodb://127.0.0.1/mahir")
  .then(() => {
    console.log("Database connected!");
  })
  .catch((err) => {
    console.error("Database connection failed: " + err);
  });

// const config = () => {

// };

// const database = { config };
// module.exports = database;
