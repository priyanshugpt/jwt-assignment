const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, default: null },
  mobile: { type: String, unique: true },
  role: { type: String, default: null },
  token: { type: String }
});

module.exports = mongoose.model("user", userSchema);
