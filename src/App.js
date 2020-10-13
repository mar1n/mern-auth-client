import React, { Fragment } from "react";
import Layout from "./core/Layout";
import Layour from "./core/Layout";

const App = () => {
  const nav = () => (
    <ul className="nav nav-tabs bg-primary">
      <li className="nav-item">
        <a href="/" className="text-light nav-link">
          Home
        </a>
      </li>
    </ul>
  );
  return (
    <Fragment>
      {nav()}
      <Layout>
        <h1>Hello React</h1>
      </Layout>
    </Fragment>
  );
};

export default App;
