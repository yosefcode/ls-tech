import React, { useEffect, useState, useRef } from "react";
import "./‏‏sign-up.css";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import validator from "validator";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function SignUp() {
  const [typepassword, setTypepassword] = useState("password");
  const [typeRetypePassword, setTypeRetypePassword] = useState("password");
  const [errMessageEmail, setErrorMessageEmail] = useState("");
  const [errMessagePassword, setErrorMessagePassword] = useState("");
  const [errMessagepasswordRetype, setErrorMessagePasswordRetype] =
    useState("");
  const [language, setLanguage] = useState("en");

  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    retypePassword: "",
  });

  const check = (
    <CheckCircleIcon style={{ fontSize: "15px", color: "green" }} />
  );

  const onchange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const validateEmail = () => {
    userDetails.email.length < 1
      ? setErrorMessageEmail(
          language === "en"
            ? "Please enter an email address"
            : "נא למלא כתובת אימייל"
        )
      : !validator.isEmail(userDetails.email)
      ? setErrorMessageEmail(
          language === "en" ? "Invalid email address" : "כתובת מייל לא תקינה"
        )
      : setErrorMessageEmail(check);
  };

  const validatePassword = () => {
    if (userDetails.password.length < 1) {
      setErrorMessagePassword(
        language === "en" ? "Please enter a password" : "נא לבחור סיסמא"
      );
      setErrorMessagePasswordRetype("");
    } else if (userDetails.password.length < 6) {
      setErrorMessagePassword(
        language === "en"
          ? "The password must be 6 characters long"
          : "סיסמא מינימום 6 תווים"
      );
      setErrorMessagePasswordRetype("");
    } else if (userDetails.password !== userDetails.retypePassword) {
      setErrorMessagePasswordRetype(
        language === "en"
          ? "The passwords do not match"
          : "הסיסמאות אינם תואמות"
      );
      setErrorMessagePassword(check);
    } else {
      setErrorMessagePassword(check);
      setErrorMessagePasswordRetype(check);
    }
  };

  const addUser = () => {
    axios.post("/api/addUser/", userDetails).then((res) => {});

    window.location.href = "/";
  };

  const SignUp = () => {
    validator.isEmail(userDetails.email) &&
    userDetails.password === userDetails.retypePassword &&
    userDetails.password.length > 5
      ? addUser()
      : validateEmail();
    validatePassword();
  };
  console.log(language);

  return (
    <div>
      {language === "en" ? (
        <div className="sign-up">
          <h1>Sign Up</h1>
          <div className="div-select">
            <select
              name="language"
              className="select-language"
              onChange={(e) => {
                setLanguage(e.target.value);
              }}
            >
              <option value="en" selected>
                En
              </option>
              <option value="heb">עב</option>
            </select>
          </div>
          <div className="div-sign">
            <div className="img-personal">
              <PersonIcon style={{ fontSize: "110px" }} />
              <AddIcon className="icon-plus" />
            </div>

            <div className="div-input">
              <h3> Personal Details</h3>

              <div className="divErr" />
              <input
                placeholder="First Name"
                type="text"
                name="firstName"
                onChange={onchange}
              />
              <div className="divErr" />

              <input
                placeholder="Last Name"
                type="text"
                name="lastName"
                onChange={onchange}
              />
              <div className="divErr" />

              <input
                placeholder="Email"
                type="text"
                name="email"
                onChange={onchange}
              />
              <div className="divErr">{errMessageEmail}</div>

              <br />
              <h3> Password</h3>

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
              <div className="divErr">{errMessagePassword}</div>

              <div className="diviconhiden">
                <input
                  placeholder="Retype Password"
                  type={typeRetypePassword}
                  name="retypePassword"
                  onChange={onchange}
                ></input>
                {typeRetypePassword === "password" ? (
                  <VisibilityIcon
                    className="iconhiden"
                    onClick={() => {
                      setTypeRetypePassword("text");
                    }}
                  />
                ) : (
                  <VisibilityOffIcon
                    className="iconhiden"
                    onClick={() => {
                      setTypeRetypePassword("password");
                    }}
                  />
                )}
              </div>
              <div className="divErr">{errMessagepasswordRetype}</div>

              <button
                style={
                  validator.isEmail(userDetails.email) &&
                  userDetails.password === userDetails.retypePassword &&
                  userDetails.password.length > 5
                    ? { opacity: 1 }
                    : { opacity: 0.5 }
                }
                onClick={SignUp}
              >
                Sign Up
              </button>
            </div>
          </div>
          Have an account? <a href="/">Sign In</a>
        </div>
      ) : (
        <div className="sign-up" dir="rtl">
          <h1>הרשמה</h1>
          <div className="div-select">
            <select
              defaultValue="עב"
              name="language"
              className="select-language"
              style={{ float: "left" }}
              onChange={(e) => {
                setLanguage(e.target.value);
              }}
            >
              <option value="en">En</option>
              <option value="heb" selected>
                עב
              </option>
            </select>
          </div>
          <div className="div-sign">
            <div className="img-personal">
              <PersonIcon style={{ fontSize: "110px" }} />
              <AddIcon className="icon-plus" />
            </div>

            <div className="div-input">
              <h3 style={{ float: "right" }}>פרטים אישיים</h3>

              <div className="divErrHeb" />
              <input
                placeholder="שם פרטי"
                type="text"
                name="firstName"
                onChange={onchange}
              />
              <div className="divErrHeb" />

              <input
                placeholder="שם משפחה"
                type="text"
                name="lastName"
                onChange={onchange}
              />
              <div className="divErrHeb" />

              <input
                placeholder="אימייל"
                type="text"
                name="email"
                onChange={onchange}
              />
              <div className="divErrHeb">{errMessageEmail}</div>

              <br />
              <h3 style={{ float: "right" }}> סיסמא</h3>

              <div className="diviconhiden">
                <input
                  placeholder="סיסמא"
                  type={typepassword}
                  name="password"
                  onChange={onchange}
                ></input>
                {typepassword === "password" ? (
                  <VisibilityIcon
                    className="iconhidenHeb"
                    onClick={() => {
                      setTypepassword("text");
                    }}
                  />
                ) : (
                  <VisibilityOffIcon
                    className="iconhidenHeb"
                    onClick={() => {
                      setTypepassword("password");
                    }}
                  />
                )}
              </div>
              <div className="divErrHeb">{errMessagePassword}</div>

              <div className="diviconhiden">
                <input
                  placeholder="אמת סיסמא"
                  type={typeRetypePassword}
                  name="retypePassword"
                  onChange={onchange}
                ></input>
                {typeRetypePassword === "password" ? (
                  <VisibilityIcon
                    className="iconhidenHeb"
                    onClick={() => {
                      setTypeRetypePassword("text");
                    }}
                  />
                ) : (
                  <VisibilityOffIcon
                    className="iconhidenHeb"
                    onClick={() => {
                      setTypeRetypePassword("password");
                    }}
                  />
                )}
              </div>
              <div className="divErrHeb">{errMessagepasswordRetype}</div>

              <button
                style={
                  validator.isEmail(userDetails.email) &&
                  userDetails.password === userDetails.retypePassword &&
                  userDetails.password.length > 5
                    ? { opacity: 1, float: "right" }
                    : { opacity: 0.5, float: "right" }
                }
                onClick={SignUp}
              >
                הירשם{" "}
              </button>
            </div>
          </div>
          יש לך חשבון? <a href="/">התחבר</a>
        </div>
      )}
    </div>
  );
}
