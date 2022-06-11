// Model
const mongoose = require("mongoose");

const DrinksSchema = new mongoose.Schema({
    name: String,
    image: String,
    price: Number,
    Ingredients: String,
  });
  
  
  const Drinks = mongoose.model("Drinks", DrinksSchema);

  module.exports = Drinks