// eslint-disable-next-line no-unused-vars
import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Heading } from "@chakra-ui/react";

import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div>
        <Heading>Logo</Heading>
      </div>
      <div className="Categories">
        <NavLink
          to={`/category/harley`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Harley Davidson
        </NavLink>
        <NavLink
          to={`/category/honda`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Honda
        </NavLink>
        <NavLink
          to={`/category/yamaha`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Yamaha
        </NavLink>
        <NavLink
          to={`/category/kawasaki`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Kawasaki
        </NavLink>
        <NavLink
          to={`/category/suzuki`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Suzuki
        </NavLink>
      </div>
      <div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
