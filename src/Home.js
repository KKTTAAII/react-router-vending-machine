import React from "react";
import PIC from "./assets/stephan-valentin-r74II0tE7tc-unsplash.jpg";
import "./Home.css";
import { SNACK_I_NAV, SNACK_II_NAV, SNACK_III_NAV } from "./constants";

const Home = () => {
  return (
    <div className="Home">
      <div className="Home-header">Pick your snack for your next Movie!</div>
      <div className="Home-pic-container">
        <img src={PIC} className="Home-pic" alt={PIC}></img>
        <div className="Home-snack-I">{SNACK_I_NAV}</div>
        <div className="Home-snack-II">{SNACK_II_NAV}</div>
        <div className="Home-snack-III">{SNACK_III_NAV}</div>
      </div>
    </div>
  );
};

export default Home;
