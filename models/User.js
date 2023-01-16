const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
});
const model = mongoose.model("user", userSchema);
module.exports = model;
