const { models } = require("../models");

exports.login = async (req, res) => {
  const { email } = req.body;
  // const filter = { email: email, password: password };
  const filter = {};

  if (email) {
    filter.email = email;
  }
  // if (password) {
  //   filter.password = password;
  // }

  const Filter = await models.usersSchema.find({ email: email });

  try {
    res.send(Filter);
  } catch (err) {
    res.status(500).send(err);
  }
};
