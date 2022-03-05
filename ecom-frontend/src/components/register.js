import React from "react";
import "../index.css";
import { Link, NavLink } from "react-router-dom";

const Register = () => {
  return (
    <form>
      <div className="form-inner">
        <h2>Register</h2>
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age: </label>
          <input type="text" name="age" id="age" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" id="password" />
        </div>
        <div className="form-group">
          <label htmlFor="repassword">Confirm Password: </label>
          <input type="repassword" name="repassword" id="repassword" />
        </div>
        <input type="submit" value="REGISTER" />
        <p>
          Already Have an account?
          <Link to="/Login">LOGIN</Link>
        </p>
      </div>
    </form>
  );
};

export default Register;
