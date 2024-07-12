// eslint-disable-next-line no-unused-vars
import React from "react";
import CartWidget from "../CartWidget/CartWidget";

import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div>
        <NavLink
          id="navlink"
          to={`/`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Logo
        </NavLink>
      </div>
      <div className="Categories">
        <NavLink
          id="navlink"
          to={`/category/harley`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Harley Davidson
        </NavLink>
        <NavLink
          id="navlink"
          to={`/category/honda`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Honda
        </NavLink>
        <NavLink
          id="navlink"
          to={`/category/yamaha`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Yamaha
        </NavLink>
        <NavLink
          id="navlink"
          to={`/category/kawasaki`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Kawasaki
        </NavLink>
        <NavLink
          id="navlink"
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
