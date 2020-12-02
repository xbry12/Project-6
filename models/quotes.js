const mongoose = require("../db/connection");

const quoteSchema = new mongoose.Schema({
  day: String,
  quote: String,
  mood: [String],
  author: String,
  imageURL: String,
});

module.exports = mongoose.model("Quotes", quoteSchema);
