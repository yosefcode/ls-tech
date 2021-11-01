import React, { useEffect, useState, useRef } from "react";
import "./sign-in.css";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add"; // import validator from "validator";
import axios from "axios";

export default function SignIn({ setConnection }) {
  const [typepassword, setTypepassword] = useState("password");
  const [errMessage, setErrorMessage] = useState("");
  // const [connection, setConnection] = useState([]);
  const [enailPassword, setEmailPassword] = useState({
    password: "",
    email: "",
  });

  const onchange = (e) => {
    setEmailPassword({
      ...enailPassword,
      [e.target.name]: e.target.value,
    });
  };

  const signIn = () => {
    axios.post("/api/login/", enailPassword).then((res) => {
      const testPassword = res.data.find(function (item) {
        return item.password === enailPassword.password;
      });
      if (res.data < 1) {
        setErrorMessage("שם משתמש לא קיים");
      } else if (!testPassword) {
        setErrorMessage("סיסמא שגויה");
      } else {
        setConnection(testPassword);
        window.location.href = "/list-employees/";
      }
    });
  };

  return (
    <div className="sign-in">
      <h1>Sign In</h1>
      <div className="div-select">
        <select name="language" className="select-language">
          <option value="En">En</option>
          <option value="heb">עב</option>
        </select>
      </div>
      <div className="div-sign">
        <div className="img-personal">
          <PersonIcon style={{ fontSize: "110px" }} />
          <AddIcon className="icon-plus" />
        </div>
        <div className="div-input">
          <input
            defaultValue=""
            placeholder="Email"
            type="text"
            name="email"
            onChange={onchange}
          />
          <div className="divErr" />
          <div className="diviconhiden">
            <input
              placeholder="Password"
              type={typepassword}
              name="password"
              onChange={onchange}
            ></input>
            {typepassword === "password" ? (
              <VisibilityIcon
                className="iconhiden"
                onClick={() => {
                  setTypepassword("text");
                }}
              />
            ) : (
              <VisibilityOffIcon
                className="iconhiden"
                onClick={() => {
                  setTypepassword("password");
                }}
              />
            )}
          </div>
          <div className="divErr">{errMessage}</div>
          <button onClick={signIn}>Sign In</button> <br />
          <a href="/">Forgot password?</a>
        </div>
        Don't have an account? <a href="/sign-up">Sign Up </a>
      </div>
    </div>
  );
}
