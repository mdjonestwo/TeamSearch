import React, { Component } from "react";
import "./styles.css";

export default class Table extends Component {
  state = {
    employees: [],
    search: "",
  };

  // Mounts list of 10 employees
  componentDidMount() {
    console.log("I will mount");
    const data = fetch("https://randomuser.me/api/?results=10");
    data
      .then((response) => response.json())
      .then((response) => {
        this.setState({ employees: response.results });
      });
  }

  // Logs unmount action
  componentWillUnmount() {
    console.log("I will unmount");
  }

  // Takes input converts it to the search's key as a given value
  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  // Calls gender type provided from search input
  handleSearchClick = () => {
    const filteredEmployees = this.state.employees.filter((employee) => {
      if (employee.gender === this.state.search) {
        return true;
      }
      return false;
    });
    this.setState({ employees: filteredEmployees });
  };

  //Sorting function
  sortEmployees = (employee1, employee2) => {
    if (employee1.dob.age > employee2.dob.age) {
      return 1;
    } else if (employee1.dob.age < employee2.dob.age) {
      return -1;
    } else {
      return 0;
    }
  };

  //Setting the state.employees to be sorted
  handleSortClick = () => {
    const employees = this.state.employees;
    const sortedEmployees = employees.sort(this.sortEmployees);
    this.setState({ employees: sortedEmployees });
  };

  //Filtering
  handleFilterClick = () => {
    const filteredEmployees = this.state.employees.filter((employee) => {
      if (employee.name.first === this.state.search) {
        return true;
      }
      return false;
    });
    this.setState({ employees: filteredEmployees });
  };

  //Dislays HTML
  render() {
    return (
      <>
        <table className="text-left">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map((employee) => (
              <tr>
                <td>{employee.name.first}</td>
                <td>{employee.email}</td>
                <td>{employee.dob.age}</td>
                <td>{employee.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <input
          type="text"
          value={this.state.search}
          onChange={this.handleInputChange}
        />
        <button type="button" onClick={this.handleSearchClick}>
          Search by Gender
        </button>
        <button type="button" onClick={this.handleSortClick}>
          Sort by Age
        </button>
        <button type="button" onClick={this.handleFilterClick}>
          Filter by name
        </button>
      </>
    );
  }
}
