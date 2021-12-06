const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
  name: { type: String },
  project: { type: String },
  stack: { type: String },
  members: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Member", autopopulate: true },
  ],
  teamleader: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Member",
    autopopulate: true,
  },
  cohort: { type: Number },
});
TeamSchema.plugin(require("mongoose-autopopulate"));
module.exports = mongoose.model("Team", TeamSchema);
