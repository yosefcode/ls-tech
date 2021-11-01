const { models } = require("../models");

exports.addUser = async (req, res) => {
  const newUser = new models.usersSchema({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
    email: req.body.email,
  });
  try {
    await newUser.save();
    res.send(newUser);
  } catch (err) {
    res.status(500).send(err);
  }
};
