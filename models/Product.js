const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String },
  image: { type: String },
  dose: { type: String },
  benefits: { type: String },
  disease: { type: mongoose.Schema.Types.ObjectId, ref: "disease" },
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  modifyAt: { type: Date, default: Date.now },
  modifyBy: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
});

const Product = mongoose.model("product", ProductSchema);
module.exports = Product;
