import "../Registrar/StudentRegister.css";
import { useState } from "react";
import Dashboard from "./Dashboard";
import TeacherRegister from "./TeacherRegister";

function AdminTRegister() {
  return (
    <>
      <Dashboard />
      <TeacherRegister/>
    </>
  );
}

export default AdminTRegister;
