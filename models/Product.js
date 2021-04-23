const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  images: {
    cover: { type: String },
    extra: [String],
  },
  uses: [String],
  diseasesCure: [String],
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
});

const Product = mongoose.model("product", ProductSchema);

module.exports = Product;
