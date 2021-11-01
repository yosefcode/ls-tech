const mongoose = require("mongoose");
const employeesSchema = require("./ListEmployeesSchema");
const usersSchema = require("./users");

function connectToDb() {
  return mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
}

const models = { employeesSchema, usersSchema };

module.exports = { connectToDb, models };
