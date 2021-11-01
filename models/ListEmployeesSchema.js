const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phone: String,
  address: String,
  roll: String,
  img: String,
  startDate: { type: String, default: Date },
});

const Employee = mongoose.model("Employees", EmployeeSchema);

const employee1 = new Employee({
  firstName: "Isac",
  lastName: "Antonsen",
  phone: "050 9876543",
  address: "Rothschild 22, Tel Aviv",
  roll: "HR",
  img: "https://randomuser.me/api/portraits/med/men/36.jpg",
});
const employee2 = new Employee({
  firstName: "Bela",
  lastName: "Scheu",
  phone: "050 9876543",
  address: "Rothschild 22, Tel Aviv",
  roll: "HR",
  img: "https://randomuser.me/api/portraits/med/women/15.jpg",
});
const employee3 = new Employee({
  firstName: "Nicole",
  lastName: "Smith",
  phone: "050 9876543",
  address: "Rothschild 22, Tel Aviv",
  roll: "HR",
  img: "https://randomuser.me/api/portraits/med/women/22.jpg",
});
const employee4 = new Employee({
  firstName: "Paul",
  lastName: "Meehan",
  phone: "050 9876543",
  address: "Rothschild 22, Tel Aviv",
  roll: "HR",
  img: "https://randomuser.me/api/portraits/med/men/16.jpg",
});
const employee5 = new Employee({
  firstName: "Aya",
  lastName: "Ås",
  phone: "050 9876543",
  address: "Rothschild 22, Tel Aviv",
  roll: "HR",
  img: "https://randomuser.me/api/portraits/med/women/15.jpg",
});
const employee6 = new Employee({
  firstName: "Lucas",
  lastName: "Møller",
  phone: "050 9876543",
  address: "Rothschild 22, Tel Aviv",
  roll: "HR",
  img: "https://randomuser.me/api/portraits/med/men/32.jpg",
});
const employee7 = new Employee({
  firstName: "Sam",
  lastName: "Stavland",
  phone: "050 9876543",
  address: "Rothschild 22, Tel Aviv",
  roll: "HR",
  img: "https://randomuser.me/api/portraits/med/men/6.jpg",
});
const employee8 = new Employee({
  firstName: "Yvonne",
  lastName: "Seufert",
  phone: "050 9876543",
  address: "Rothschild 22, Tel Aviv",
  roll: "HR",
  img: "https://randomuser.me/api/portraits/med/women/5.jpg",
});
const employee9 = new Employee({
  firstName: "Emma",
  lastName: "Smith",
  phone: "050 9876543",
  address: "Rothschild 22, Tel Aviv",
  roll: "HR",
  img: "https://randomuser.me/api/portraits/med/women/25.jpg",
});
const employee10 = new Employee({
  firstName: "Priteche",
  lastName: "Santos",
  phone: "050 9876543",
  address: "Rothschild 22, Tel Aviv",
  roll: "HR",
  img: "https://randomuser.me/api/portraits/med/men/12.jpg",
});

// employee1.save();
// employee2.save();
// employee3.save();
// employee4.save();
// employee5.save();
// employee6.save();
// employee7.save();
// employee8.save();
// employee9.save();
// employee10.save();

module.exports = Employee;
