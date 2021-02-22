import React from "react";

function EmployeeDirectory(props) {
  console.log(props);
  return <p>{props.name}'s Employee Directory</p>;
}

export default EmployeeDirectory;
