import "../Registrar/StudentRegister.css";
import { useState } from "react";
import TeacherDashboard from "./TeacherDashboard";
import TViewStudentData from "./TViewStudentData";
export default  function TeacherSRegister() {
  return (
    <>
      <TeacherDashboard />
      <TViewStudentData/>
    </>
  );
}
