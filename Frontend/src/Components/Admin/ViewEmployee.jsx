import React from "react";
import "./ViewStudent.css";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import ViewEmployeeData from "./ViewEmployeeData";
function ViewEmployee() {
  return (
    <>
      <Dashboard />
      <ViewEmployeeData/>
    </>
  );
}

export default ViewEmployee;
