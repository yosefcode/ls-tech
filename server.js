const fs = require("fs");
const cors = require("cors");
const express = require("express");
const app = express();
const path = require("path");
const { connectToDb, models } = require("./models");
const listEmployees = require("./funcOftheServer/listEmployees");
const crudEmployee = require("./funcOftheServer/crudEmployee");
const addUsers = require("./funcOftheServer/signUP");
const login = require("./funcOftheServer/signIn");

app.use(cors());
app.use(express.json());

const dotenv = require("dotenv");

dotenv.config();
// app.use(express.static(path.join(__dirname, "build")));
app.use(express.static(path.join(__dirname, "client/build")));

const PORT = process.env.PORT || 7000;

connectToDb().then(async () => {
  app.listen(PORT, () => {
    console.log("Server is running port ", PORT);
  });
});

app.get("/list-employees/", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});
app.get("/sign-up/", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});
app.get("/management-employees/", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.get("/api/listEmployees/", listEmployees.list);

app.post("/api/addEmployee/", crudEmployee.addEmployee);

app.delete(`/api/deleteEmployee/:id`, crudEmployee.deleteEmployee);

app.put(`/api/editEmployee/:id`, crudEmployee.editEmployee);

app.post("/api/addUser/", addUsers.addUser);

app.post("/api/login/", login.login);
