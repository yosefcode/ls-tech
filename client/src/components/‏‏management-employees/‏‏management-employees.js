import React, { useEffect, useState, useRef } from "react";
import "./‏‏management-employees.css";
import ModalAddEmployee from "../list-employees/add-employee/add-employee";
import ModalEditEmployee from "./edit-employee/edit-employee";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function ManagementEmployees() {
  const [modalAdd, setModalAdd] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [listEmployees, setListEmployees] = useState([]);
  const [employee, setEmployee] = useState([]);
  const userName = JSON.parse(localStorage.getItem(`userName`)) || [];

  useEffect(() => {
    axios.get(`/api/listEmployees/`).then((res) => {
      setListEmployees(res.data);
    });
  }, [modalAdd, modalEdit]);

  const rmoveEmployee = async (id) => {
    await axios.delete("/api/deleteEmployee/" + id).then();

    axios.get(`/api/listEmployees/`).then((res) => {
      setListEmployees(res.data);
    });
  };

  const editEmployee = (employee) => {
    setModalEdit(true);
    setEmployee([employee]);
  };

  const date = { year: "numeric", month: "short", day: "numeric" };

  return (
    <div className="manage-employees">
      <div className="userName">
        <img src={"https://www.w3schools.com/howto/img_avatar.png"} alt="" />
        {userName.firstName} {userName.lastName}
      </div>

      <div className="header">
        <h1>Managing Employees</h1>
        <div>
          <button
            className="btn-addEmployee"
            onClick={() => (window.location.href = "/list-employees/")}
          >
            List of employees{" "}
          </button>
          {"  "}
          <button className="btn-addEmployee" onClick={() => setModalAdd(true)}>
            + Add Employee
          </button>
        </div>
      </div>
      <div className="table-list">
        <table>
          <tr>
            <th style={{ width: "90px" }}>{""}</th>
            <th style={{ width: "145px" }}>{"First Name"}</th>
            <th style={{ width: "145px" }}>{"Lst Name"}</th>
            <th style={{ width: "115px" }}>{"Phone"}</th>
            <th style={{ width: "250px" }}>{"Address"}</th>
            <th style={{ width: "150px" }}>{"Roll"}</th>
            <th style={{ width: "110px" }}>{"Start Date"}</th>
            <th style={{ width: "88px" }}>{""}</th>
            <th style={{ width: "88px" }}>{""}</th>
          </tr>
          {listEmployees.map((user) => (
            <tr key={user._id}>
              <td>
                <img
                  src={
                    user.img
                      ? user.img
                      : "https://www.w3schools.com/howto/img_avatar.png"
                  }
                  alt=""
                />
              </td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.phone}</td>
              <td>{user.address}</td>
              <td>{user.roll}</td>
              <td>
                {new Date(user.startDate).toLocaleDateString("en-GB", date)}
              </td>
              <td>
                <EditIcon onClick={() => editEmployee(user)} />
              </td>
              <td>
                {" "}
                <DeleteIcon onClick={() => rmoveEmployee(user._id)} />{" "}
              </td>
            </tr>
          ))}
        </table>
      </div>
      {modalAdd && <ModalAddEmployee setModalAdd={setModalAdd} />}
      {modalEdit && (
        <ModalEditEmployee setModalEdit={setModalEdit} employee={employee} />
      )}
    </div>
  );
}
