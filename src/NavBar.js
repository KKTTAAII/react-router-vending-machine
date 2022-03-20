import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { SNACK_I_NAV, SNACK_II_NAV, SNACK_III_NAV } from "./constants";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <NavLink exact to="/">
        HOME
      </NavLink>
      {SNACK_I_NAV}
      {SNACK_II_NAV}
      {SNACK_III_NAV}
    </nav>
  );
};

export default NavBar;
