const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  fullName: { type: String },
  email: { type: String, require: true },
  password: { type: String },
  admin: { type: Boolean, default: false },
});

module.exports = mongoose.model("User", UserSchema);
