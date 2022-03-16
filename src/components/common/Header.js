import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const activeStyle = { color: "#f15b2a" };
  return (
    <nav>
      <NavLink to="/" className="text-style" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/docs" className="text-style" activeStyle={activeStyle}>
        Documents
      </NavLink>
      {" | "}
      <NavLink to="/about" className="text-style" activeStyle={activeStyle}>
        About
      </NavLink>
    </nav>
  );
};

export default Header;
