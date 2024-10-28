import React, { Component } from "react";
import Counter from "./components/Counter";
import "bootstrap/dist/css/bootstrap.css";
import Counters from "./components/Counters";
import NavBar from "./components/NavBar";

export default class App extends Component {
  count = 0;

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <div className="container">
          <Counters>Hello</Counters>;
        </div>
      </div>
    );
  }
}
