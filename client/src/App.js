import "./App.css";
import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from "./logo.png";
import SignIn from "./components/sign-in/sign-in";
import SignUp from "./components/‏‏sign-up/‏‏sign-up";
import ListEmployees from "./components/list-employees/list-employees";
import ManagementEmployees from "./components/‏‏management-employees/‏‏management-employees";

function App() {
  const [connection, setConnection] = useState([]);

  const userName = JSON.parse(localStorage.getItem(`userName`)) || [];

  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <img src={logo} alt="" />
        </header>
        <Switch>
          <Route exact path="/">
            <SignIn setConnection={setConnection} />
          </Route>

          <Route path="/sign-up/">
            <SignUp />
          </Route>

          <Route exact path="/list-employees/">
            <ListEmployees />
          </Route>
          <Route exact path="/management-employees/">
            <ManagementEmployees />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
