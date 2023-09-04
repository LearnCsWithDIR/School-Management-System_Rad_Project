import "../Registrar/StudentRegister.css";
import { useState } from "react";
import Dashboard from "./Dashboard";
import EmployeeRegister from "./EmployeeRegister";

function AdminERegister() {
  return (
    <>
      <Dashboard />
      <EmployeeRegister/>
    </>
  );
}

export default AdminERegister;
