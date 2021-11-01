const { models } = require("../models");

exports.list = async (req, res) => {
  const listEmployees = await models.employeesSchema.find();
  try {
    res.send(listEmployees);
  } catch (err) {
    res.status(500).send(err);
  }
};
