const mongoose = require("mongoose");
const ttl = require("mongoose-ttl");

const SessionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "user" },
  token: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

SessionSchema.plugin(ttl, { ttl: "1d" });

const Session = mongoose.model("session", SessionSchema);

module.exports = Session;
