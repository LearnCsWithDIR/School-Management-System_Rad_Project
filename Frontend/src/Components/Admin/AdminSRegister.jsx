import "../Registrar/StudentRegister.css";
import { useState } from "react";
// handle the http request and response
import axios from "axios";
import { Link } from "react-router-dom";
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
