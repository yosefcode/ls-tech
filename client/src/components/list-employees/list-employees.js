import React, { useEffect, useState, useRef } from "react";
import "./list-employees.css";
import ModalAddEmployee from "./add-employee/add-employee";
import axios from "axios";

export default function ListEmployees() {
  const [modalAdd, setModalAdd] = useState(false);
  const [listEmployees, setListEmployees] = useState([]);
  const userName = JSON.parse(localStorage.getItem(`userName`)) || [];

  useEffect(() => {
    axios.get(`/api/listEmployees/`).then((res) => {
      setListEmployees(res.data);
    });
  }, [modalAdd]);

  const date = { year: "numeric", month: "short", day: "numeric" };

  return (
    <div className="list-employees">
      <div className="userName">
        <img src={"https://www.w3schools.com/howto/img_avatar.png"} alt="" />
        {userName.firstName} {userName.lastName}
      </div>

      <div className="header">
        <h1>Managing Employees</h1>
        <div>
          <button
            className="btn-addEmployee"
            onClick={() => (window.location.href = "/management-employees/")}
          >
            Manager login{" "}
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
            <th style={{ width: "160px" }}>{"First Name"}</th>
            <th style={{ width: "160px" }}>{"Lst Name"}</th>
            <th style={{ width: "132px" }}>{"Phone"}</th>
            <th style={{ width: "300px" }}>{"Address"}</th>
            <th style={{ width: "216px" }}>{"Roll"}</th>
            <th style={{ width: "124px" }}>{"Start Date"}</th>
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
            </tr>
          ))}
        </table>
      </div>
      {modalAdd && <ModalAddEmployee setModalAdd={setModalAdd} />}
    </div>
  );
}
