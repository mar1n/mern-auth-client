import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Layout from "../core/Layout";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/react-toastify.esm";

const Signup = () => {
  return (
    <Layout>
      <ToastContainer />
      <h1>Signup</h1>
    </Layout>
  );
};

export default Signup;
