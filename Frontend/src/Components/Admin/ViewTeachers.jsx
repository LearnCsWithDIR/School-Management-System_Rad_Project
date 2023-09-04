import React from "react";
import "./ViewStudent.css";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import ViewTeacherData from "./ViewTeacherData";
function ViewTeacher() {
  return (
    <>
      <Dashboard />
      <ViewTeacherData />
    </>
  );
}

export default ViewTeacher;
