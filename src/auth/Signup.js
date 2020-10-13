import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Layout from "../core/Layout";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/react-toastify.esm";

const Signup = () => {
  const [values, setValues] = useState({
    name: "ryan",
    email: "szym0nd4widowicz@gmail.com",
    password: "rrrrrrr",
    buttonText: "Submit",
  });
  const handleChange = (name) => (event) => {
    //
  };

  const { name, email, password, buttonText } = values;
  const clickSubmit = (event) => (
    //
    <></>
  );
  const signupFrom = () => (
    <form>
      <div className="form-group">
        <label className="text-muted">Name</label>
        <input
          onChange={handleChange("name")}
          value={name}
          type="text"
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label className="text-muted">Email</label>
        <input
          onChange={handleChange("email")}
          value={email}
          type="email"
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label className="text-muted">Passwrod</label>
        <input
          onChange={handleChange("password")}
          value={password}
          type="password"
          className="form-control"
        />
      </div>

      <button className="btn btn-primary" onClick={clickSubmit}>
        {buttonText}
      </button>
    </form>
  );
  return (
    <Layout>
      <div className="col-d-6 offset-md-3">
        <ToastContainer />
        <h1 className="p-5 text-center">Signup</h1>
        {signupFrom()}
      </div>
    </Layout>
  );
};

export default Signup;
