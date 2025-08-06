const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  ingredients: [String],
  steps: [String],
  image: String, // base64 or image URL
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Recipe", recipeSchema);
