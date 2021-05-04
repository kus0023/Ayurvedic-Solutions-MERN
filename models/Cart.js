const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "product",
  },
  user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "user" },
  createdAt: { type: Date, default: Date.now },
});

const Cart = mongoose.model("cart", CartSchema);

module.exports = Cart;
