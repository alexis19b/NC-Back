const mongoose = require("mongoose");

const MemberSchema = new mongoose.Schema({
  cohort: { type: Number, default: 2 },
  fullname: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  country: { type: String, require: true },
  areas: { type: String, require: true },
  github: { type: String, require: true },
  linkedin: { type: String, require: true },
  others: { type: String, require: true },
  teamleader: { type: Boolean, default: false },
  availability: { type: String, require: true },
  language: { type: String, require: true },
  stack: { type: String },
  phone: { type: String },
  experience: { type: String },
  team: { type: Array },
});

MemberSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model("Member", MemberSchema);
