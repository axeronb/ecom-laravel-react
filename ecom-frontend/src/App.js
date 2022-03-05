import React, { Component, useState } from "react";
import LoginForm from "./components/Login";
import "./index.css";
import Register from "./components/register";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    // const adminUser = {
    //   email: "admin@admin.com",
    //   password: "admin123",
    // };

    // const [user, setUser] = useState({ name: "", email: "" });
    // const [error, setError] = useState("");

    // const Login = (details) => {
    //   console.log(details);

    //   if (
    //     details.email === adminUser.email &&
    //     details.password === adminUser.password
    //   ) {
    //     setUser({
    //       name: details.name,
    //       email: details.email,
    //     });
    //     console.log("Logged in");
    //   } else {
    //     console.log("Details doesnot match");
    //     setError("Details doesnot match");
    //   }
    // };

    // const Logout = () => {
    //   console.log(LoginForm.details);
    //   setUser({
    //     name: "",
    //     email: "",
    //   });
    // };

    return (
      <BrowserRouter>
        <div className="App">
          {/* {user.email !== "" ? (
          <div className="welcome">
            <h2>
              Welcome, <span>{user.name}</span>
            </h2>
            <button onClick={Logout}>Logout</button>
          </div>
        ) : (
          <LoginForm Login={Login} error={error} />
        )} */}
          <LoginForm />
          <Route exact path="/" component={LoginForm} />
          <Route path="/register" component={Register} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
