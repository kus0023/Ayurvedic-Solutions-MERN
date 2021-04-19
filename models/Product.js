const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  image: { type: String },
  dose: { type: String },
  deseasesCure: { type: String },
});

const Product = mongoose.model("products", ProductSchema);

module.exports = Product;
