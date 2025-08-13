const mongoose = require('mongoose');

const DBConnection = async () => {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) {
      throw new Error("MONGO_URI is not defined in .env");
    }
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("MongoDB connected successfully");
  } catch (err) {
    throw new Error(`Could not connect to MongoDB: ${err}`);
  }
};

module.exports = DBConnection;
