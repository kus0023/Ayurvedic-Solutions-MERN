const mongoose = require("mongoose");

const diseaseSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  commonNames: { type: [String], default: [] },
  description: { type: String },
  causes: { type: [String], default: [] },
  symptoms: { type: [String], default: [] },
  remedies: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "product",
    default: [],
  },
  createdAt: { type: Date, default: Date.now },
  modifyBy: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  modifyAt: { type: Date, default: Date.now },
});

diseaseSchema.pre("updateOne", (next) => {
  this.modifyAt = Date.now();
});

const Disease = mongoose.model("disease", diseaseSchema);

module.exports = Disease;
