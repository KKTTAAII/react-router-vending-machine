import React from "react";
import SnackOne from "./SnackOne";
import SnackTwo from "./SnackTwo";
import SnackThree from "./SnackThree";
import Home from "./Home";
import NavBar from "./NavBar";
import { BrowserRouter, Route } from "react-router-dom";

const VendingMachine = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/snack-I">
        <SnackOne />
      </Route>
      <Route exact path="/snack-II">
        <SnackTwo />
      </Route>
      <Route exact path="/snack-III">
        <SnackThree />
      </Route>
    </BrowserRouter>
  );
};

export default VendingMachine;
