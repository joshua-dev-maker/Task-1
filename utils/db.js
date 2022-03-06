const mongoose = require("mongoose");
const env = require("dotenv").config();
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DATA_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected!");
  } catch (error) {
    console.log("Database not connected");
  }
};

module.exports = { connectDb };
