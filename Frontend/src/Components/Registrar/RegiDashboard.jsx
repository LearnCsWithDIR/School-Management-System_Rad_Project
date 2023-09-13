import "../Admin/Dashboard.css";
import { useState } from "react";
import Navbar from "../Utils/Navbar";
import { Link } from "react-router-dom";

export default function RegiDashboard() {
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
                <span className="title123">Registrar</span>
              </li>

              <li>
                <Link to="/View-Students">
                  <span className="icon">
                    <ion-icon name="walk-outline"></ion-icon>
                  </span>
                  <span className="title1">Attendence</span>
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

              <li>
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
      </div>
    </>
  );
}
