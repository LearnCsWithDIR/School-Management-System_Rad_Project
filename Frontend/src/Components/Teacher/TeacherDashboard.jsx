import "../Admin/Dashboard.css";
import "./TeacherDashboard.css";
import { useState } from "react";
import { Link, Router, useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";

function TeacherDashboard(props) {
  const { id } = props;
  let teacherId;

  // id is get the first login time only then I Stored it in the cookies
  if (id != undefined) {
    document.cookie = `teacherId=${id}`;
  }

  function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split("=");
      if (cookieName === name) {
        return decodeURIComponent(cookieValue);
      }
    }
    return null;
  }

  teacherId = getCookie("teacherId");

  const navigate = useNavigate();

  if (!teacherId) {
    navigate("/login");
  }

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
                <span className="title123">Teacher </span>
                <p className="title1234">{teacherId} </p>
              </li>
              {/* <li>
                <Link to={`/Teacher/${teacherId}`}>
                  <span className="icon">
                    <ion-icon name="home-outline"></ion-icon>
                  </span>
                  <span className="title1">Dashboard</span>
                </Link>
              </li> */}

              <li>
                <Link to="/Teacher-View-Student-Data">
                  <span className="icon">
                    <ion-icon name="people-outline"></ion-icon>
                  </span>
                  <span className="title1">Students</span>
                </Link>
              </li>
              <li>
                <Link to={`/Add-Result/${teacherId}`}>
                  <span className="icon">
                    <ion-icon name="book-outline"></ion-icon>
                  </span>
                  <span className="title1">Add-Result</span>
                </Link>
              </li>
              {/* <li>
                <Link to="/teacher/password-reset">
                  <span className="icon">
                    <ion-icon name="cog-outline"></ion-icon>
                  </span>
                  <span className="title1">Reset Password</span>
                </Link>
              </li> */}

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
