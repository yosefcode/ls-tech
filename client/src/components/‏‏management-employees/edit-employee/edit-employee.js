import React, { useEffect, useState, useRef } from "react";
import "./edit-employee.css";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

export default function ModalEditEmployee({ setModalEdit, employee }) {
  const newEmployee = {};

  const editEmployee = (id) => {
    axios.put(`/api/editEmployee/` + id, newEmployee).then((res) => {});
    console.log(id);
  };

  return (
    <div className="add-employee">
      <div className="div-addEmployee">
        <div className="close-Icon">
          <CloseIcon onClick={() => setModalEdit(false)} />
        </div>
        <div className="div-input-addEmployee">
          <h3>Edit Employee Details</h3>

          {employee.map((user) => (
            <div key={user._id}>
              <input
                defaultValue={user.firstName}
                placeholder="First Name"
                type="text"
                onChange={(e) => {
                  newEmployee.firstName = e.target.value;
                }}
              />

              <input
                defaultValue={user.lastName}
                placeholder="Last Name"
                type="text"
                onChange={(e) => {
                  newEmployee.lastName = e.target.value;
                }}
              />

              <input
                defaultValue={user.phone}
                placeholder="Phone"
                type="text"
                onChange={(e) => {
                  newEmployee.phone = e.target.value;
                }}
              />

              <input
                defaultValue={user.address}
                placeholder="Address"
                type="text"
                onChange={(e) => {
                  newEmployee.address = e.target.value;
                }}
              />

              <select
                defaultValue={user.roll}
                className="select-language"
                onChange={(e) => {
                  newEmployee.roll = e.target.value;
                }}
              >
                <option defaultValue={""} disabled>
                  Roll
                </option>
                <option value="HR">HR</option>
                <option value="HA">HA</option>
              </select>

              <button
                onClick={() => {
                  editEmployee(user._id);
                  setModalEdit(false);
                }}
              >
                Change
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
