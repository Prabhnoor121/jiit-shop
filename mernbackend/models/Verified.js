const mongoose = require("mongoose");

const VerifyTemplate = new mongoose.Schema({
  Enrollment: {
    type: Number,
    unique: true,
    required: true,
  },
  Room: {
    type: Number,
    required: true,
  },
  Contact: {
    type: Number,
    required: true,
  },
  ID: {
    Data: Buffer,
    ContentType: String,
  },
  userId: {
    type: mongoose.Schema.ObjectId,
  },
});

module.exports = mongoose.model("verifyUser", VerifyTemplate);
