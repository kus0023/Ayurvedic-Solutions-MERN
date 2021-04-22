const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    default: null,
    ref: "user",
  },
});

UserSchema.methods = {
  checkPassword: function (password) {
    return bcryptjs.compare(password, this.password);
  },

  hashPassword: function (password) {
    return bcryptjs.hashSync(password, 10);
  },
};

UserSchema.pre("save", function (next) {
  if (!this.password) {
    console.log("=========NO PASSWORD IS PROVIDED=======");
  } else {
    this.password = this.hashPassword(this.password);
  }

  next();
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
