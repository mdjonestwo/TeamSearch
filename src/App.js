import React, { Component } from "react";
import Table from "./Table";
import EmployeeDirectory from "./EmployeeDirectory";
import "./styles.css";
// https://randomuser.me/documentation#errors

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <EmployeeDirectory name="Google" />
        <Table />
      </div>
    );
  }
}
