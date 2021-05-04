const mongoose = require("mongoose");

const diseaseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  causes: { type: [String] },
  symbtoms: { type: [String] },
  remedies: { type: [mongoose.Schema.Types.ObjectId], ref: "product" },
});

const Disease = mongoose.model("disease", diseaseSchema);

module.exports = Disease;
