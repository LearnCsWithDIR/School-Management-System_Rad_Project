import "../Registrar/StudentRegister.css";
import { useState } from "react";
import TeacherDashboard from "./TeacherDashboard";
import TViewStudentData from "./TViewStudentData";
import StudentRegister from "../Registrar/StudentRegister";
export default  function TeacherSRegister() {
  return (
    <>
      <TeacherDashboard />
      <StudentRegister/>
    </>
  );
}
