import "../Admin/Dashboard.css";
import "./TeacherDashboard.css"
import { useState } from "react";
import { Link, Router } from "react-router-dom";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";

function TeacherDashboard() {
  return (
    <>

      <div>
        <div className="Slider">
          <div className="navigation">
            <ul>
              <li>
                {/* <span className="icon">
                  <ion-icon name="logo-apple"></ion-icon>
                </span> */}
                <span className="title123">Teacher</span>
              </li>
              <li>
                <Link to="/Teacher">
                  <span className="icon">
                    <ion-icon name="home-outline"></ion-icon>
                  </span>
                  <span className="title1">Dashboard</span>
                </Link>
              </li>

              <li>
                <Link to="/Teacher-View-Student-Data">
                  <span className="icon">
                    <ion-icon name="people-outline"></ion-icon>
                  </span>
                  <span className="title1">Students</span>
                </Link>
              </li>
              <li>
                <Link to="/Add-Result">
                  <span className="icon">
                  <ion-icon name="book-outline"></ion-icon>
                  </span>
                  <span className="title1">Add-Result</span>
                </Link>
              </li>
              <li>
                <a href="">
                  <span className="icon">
                    <ion-icon name="cog-outline"></ion-icon>
                  </span>
                  <span className="title1">Settings</span>
                </a>
              </li>

              <li id="sign-out">
                <Link to="/">
                  <span className="icon">
                    <ion-icon name="log-out-outline"></ion-icon>
                  </span>
                  <span className="title1">Sign Out</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className=""></div>
      </div>
    </>
  );
}

export default TeacherDashboard;
