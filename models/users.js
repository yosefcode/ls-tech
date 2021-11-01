const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  email: String,
  password: String,
  firstName: String,
  lastName: String,
});

const User = mongoose.model("Users", UsersSchema);

const user1 = new User({
  email: "Stringkkkkk",
  password: "String",
  firstName: "String",
  lastName: "String",
});

// user1.save();

module.exports = User;
