import React, { useEffect, useState, useRef } from "react";
import "./add-employee.css";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

export default function ModalAddEmployee({ setModalAdd }) {
  const employee = {};

  const addemployee = () => {
    axios.post("/api/addEmployee/", employee).then((res) => {});
  };

  return (
    <div className="add-employee">
      <div className="div-addEmployee">
        <div className="close-Icon">
          <CloseIcon onClick={() => setModalAdd(false)} />
        </div>
        <div className="div-input-addEmployee">
          <h3>Add Employee</h3>

          <input
            placeholder="First Name"
            type="text"
            onInput={(e) => {
              employee.firstName = e.target.value;
            }}
          />

          <input
            placeholder="Last Name"
            type="text"
            onChange={(e) => {
              employee.lastName = e.target.value;
            }}
          />

          <input
            placeholder="Phone"
            type="text"
            onChange={(e) => {
              employee.phone = e.target.value;
            }}
          />

          <input
            placeholder="Address"
            type="text"
            onChange={(e) => {
              employee.address = e.target.value;
            }}
          />

          <select
            className="select-language"
            onChange={(e) => {
              employee.roll = e.target.value;
            }}
          >
            <option value="" disabled selected>
              Roll
            </option>
            <option value="HR">HR</option>
            <option value="HA">HA</option>
          </select>

          <button
            onClick={() => {
              addemployee();
              setModalAdd(false);
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
