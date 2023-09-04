import React from "react";
import "./ViewStudent.css";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import ViewStudentData from "../Utils/ViewStudentData";
function ViewStudent() {
  return (
    <>
      <Dashboard />
      <ViewStudentData/>
    </>
  );
}

export default ViewStudent;
