import "../Registrar/StudentRegister.css";
import { useState } from "react";
import Dashboard from "./Dashboard";
import StudentRegister from "../Registrar/StudentRegister";

function AdminSRegister() {
  return (
    <>
      <Dashboard />
      <StudentRegister />
    </>
  );
}

export default AdminSRegister;
