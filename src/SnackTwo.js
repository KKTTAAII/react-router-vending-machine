import React from "react";
import { CHOCOLATE } from "./constants";
import { GO_BACK } from "./constants";
import useNum from "./hook";
import "./SnackTwo.css";

const SnackTwo = () => {
  const [numOfBags, increment, decrement] = useNum();
  return (
    <div className="SnackTwo">
      <div className="SnackTwo-description-I">
        Is your movie a romantic movie tonight?
      </div>
      <div className="SnackTwo-description-II">TRY THIS!!!</div>
      <img src={CHOCOLATE} alt="CHOCOLATE" className="SnackTwo-img"></img>
      <div>Make sure you have enough for the entire movie</div>
      <div className="SnackTwo-num">
        {numOfBags > 0 ? <button onClick={decrement}>{"➖"}</button> : ""}
        <div>{numOfBags}</div>
        <button onClick={increment}>{"✖️"}</button>
      </div>
      {GO_BACK}
    </div>
  );
};

export default SnackTwo;
