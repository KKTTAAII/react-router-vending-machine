import React from "react";
import { GO_BACK } from "./constants";
import { HARIBO } from "./constants";
import "./SnackThree.css";

const SnackThree = () => {
  return (
    <div className="SnackThree">
      <div className="SnackThree-description-I">
        No matter what movie you are going to watch
      </div>
      <div className="SnackThree-description-II">
        YOU CAN ONLY HAVE 1 OF THIS THE ENTIRE MOVIE!!!
      </div>
      <img src={HARIBO} alt="HARIBO"></img>
      {GO_BACK}
    </div>
  );
};

export default SnackThree;
