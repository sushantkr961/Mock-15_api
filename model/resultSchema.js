const mongoose = require("mongoose");

const resultModel = new mongoose.Schema({
  username: { type: String },
  result: { type: Array, default: 0 },
  correct: { type: Number, default: 0 },
  incorrect: { type: Number, default: 0 },
  score: { type: Number, default: 0 },
  percentage: { type: Number, default: 0 },
  acheived: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Result", resultModel);
