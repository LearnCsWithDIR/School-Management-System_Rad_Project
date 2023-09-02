import React from "react";
import "./ViewStudent.css";
import StudentRegister from "../Registrar/StudentRegister";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
function ViewStudent() {
  return (
    <>
      <Dashboard />
      <Link to="/Admin-SRegister"> Add Students</Link>
      {/* <StudentRegister/> */}
    </>
  );
}

export default ViewStudent;
