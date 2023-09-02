import React from "react";
import "./ViewStudent.css";
import StudentRegister from "../Registrar/StudentRegister";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import ViewStudentData from "../Utils/ViewStudentData";
function ViewStudent() {
  return (
    <>
      <Dashboard />
      {/* <Link to="/Admin-SRegister"> Add Students</Link> */}
      <ViewStudentData/>
      {/* <StudentRegister/> */}
    </>
  );
}

export default ViewStudent;
