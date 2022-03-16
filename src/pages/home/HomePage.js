import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="jumbotrone">
      <h1>Documentation</h1>
      <p>Hopefully I will make some kind of app for documentation</p>
      <Link className="link-button" to="about">
        Learn more
      </Link>
    </div>
  );
};

export default HomePage;
