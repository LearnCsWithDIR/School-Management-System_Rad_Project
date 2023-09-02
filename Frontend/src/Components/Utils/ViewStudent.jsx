import React from "react";
import "./ViewStudent.css";
import StudentRegister from "../Registrar/StudentRegister";
import { Link } from "react-router-dom";
import Dashboard from "../Admin/Dashboard";
function ViewStudent() {
  return (
    <>
      <Dashboard />
      {/* <Link to="/StudentRegister"> Add Students</Link> */}
      {/* <StudentRegister/> */}
    </>
  );
}

export default ViewStudent;
