import "./Dashboard.css";
import { useState } from "react";
import Navbar from "../Utils/Navbar";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      {/* <Navbar /> */}
      <div>
        <div className="Slider">
          <div className="navigation">
            <ul>
              {/* <li>
              <a href="">
                <span className="icon">
                  <ion-icon name="logo-apple"></ion-icon>
                </span>
                <span className="title1">Brand Name</span>
              </a>
            </li> */}
              <li>
                <Link to="/Admin">
                  <span className="icon">
                    <ion-icon name="home-outline"></ion-icon>
                  </span>
                  <span className="title1">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to="/ViewTeacher">
                  <span className="icon">
                    <ion-icon name="people-outline"></ion-icon>
                  </span>
                  <span className="title1">Teachers</span>
                </Link>
              </li>
              <li>
                <Link to="/View-Students">
                  <span className="icon">
                    <ion-icon name="people-outline"></ion-icon>
                  </span>
                  <span className="title1">Students</span>
                </Link>
              </li>
              <li>
                <a href="">
                  <span className="icon">
                    <ion-icon name="people-outline"></ion-icon>
                  </span>
                  <span className="title1">Employees</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span className="icon">
                    <ion-icon name="cog-outline"></ion-icon>
                  </span>
                  <span className="title1">Settings</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span className="icon">
                    <ion-icon name="help-outline"></ion-icon>
                  </span>
                  <span className="title1">Help</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span className="icon">
                    <ion-icon name="log-out-outline"></ion-icon>
                  </span>
                  <span className="title1">Sign Out</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className=""></div>
      </div>
    </>
  );
}

export default Dashboard;
