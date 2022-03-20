import React from "react";
import { BBQ_LAYS } from "./constants";
import { GO_BACK } from "./constants";
import useNum from "./hook";
import "./SnackOne.css";

const SnackOne = () => {
  const [numOfBags, increment, decrement] = useNum();
  return (
    <div className="SnackOne">
      <img src={BBQ_LAYS} alt="BBQ_LAYS" className="SnackOne-img"></img>
      <div className="SnackOne-description-I">
        Best snack for action movies!
      </div>
      <div className="SnackOne-description-II">How many would you like?</div>
      <div className="SnackOne-num">
        {numOfBags > 0 ? <button onClick={decrement}>{"➖"}</button> : ""}
        <div>{numOfBags}</div>
        <button onClick={increment}>{"✖️"}</button>
      </div>
      {GO_BACK}
    </div>
  );
};

export default SnackOne;
