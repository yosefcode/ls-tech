const { models } = require("../models");

exports.addEmployee = async (req, res) => {
  const newEmployee = new models.employeesSchema({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phone: req.body.phone,
    address: req.body.address,
    roll: req.body.roll,
    startDate: req.body.startDate,
  });
  try {
    await newEmployee.save();
    res.send(newEmployee);
    console.log("add");
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.deleteEmployee = async (req, res) => {
  const idEmployee = req.params.id;
  await models.employeesSchema.findByIdAndDelete({
    _id: idEmployee,
  });
  try {
    res.status(200).send(idEmployee);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.editEmployee = async (req, res) => {
  const Id = req.params.id;

  let updateValues = { $set: {} };

  if (req.body.firstName) updateValues.$set["firstName"] = req.body.firstName;
  if (req.body.lastName) updateValues.$set["lastName"] = req.body.lastName;
  if (req.body.phone) updateValues.$set["phone"] = req.body.phone;
  if (req.body.address) updateValues.$set["address"] = req.body.address;
  if (req.body.roll) updateValues.$set["roll"] = req.body.roll;

  try {
    await models.employeesSchema.findByIdAndUpdate(Id, updateValues);
    res.status(200).send(console.log(updateValues));
  } catch (err) {
    res.status(500).send(err);
  }
};
