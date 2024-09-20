const mongoose = require("mongoose");

const connectWithMongoDB = async (url) => {
  return mongoose.connect(url);
};

module.exports = connectWithMongoDB;
