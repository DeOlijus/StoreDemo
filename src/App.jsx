import React, { Component } from "react";
//import CustomersList from "./CustomersList";
import NavBar from "./NavBar";
import ShoppingCart from "./ShoppingCart";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ShoppingCart x="10" />
      </React.Fragment>
    );
  }
}