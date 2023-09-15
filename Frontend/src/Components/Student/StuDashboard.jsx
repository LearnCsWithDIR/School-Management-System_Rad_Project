import "../Admin/Dashboard.css";
import { useState } from "react";
import Navbar from "../Utils/Navbar";
import { Link, useNavigate } from "react-router-dom";

export default function StuDashboard(props) {
  const { id } = props;
  // console.log(id);
  let studentId;

  // id is get the first login time only then I Stored it in the cookies
  if (id != undefined) {
    document.cookie = `studentId=${id}`;
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

  studentId = getCookie("studentId");

  const navigate = useNavigate();

  if (!studentId) {
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
                <span className="title123">Student</span>
              </li>
              <li>
                <Link to={`/Student/${studentId}`}>
                  <span className="icon">
                    <ion-icon name="home-outline"></ion-icon>
                  </span>
                  <span className="title1">Dashboard</span>
                </Link>
              </li>
              {/* <li>
                <Link to="/ViewTeacher">
                  <span className="icon">
                  <ion-icon name="newspaper-outline"></ion-icon>
                  </span>
                  <span className="title1">Assessment</span>
                </Link>
              </li> */}
              <li>
                <Link to={`/student/password-reset/${studentId}`}>
                  <span className="icon">
                    <ion-icon name="cog-outline"></ion-icon>
                  </span>
                  <span className="title1">Reset Password</span>
                </Link>
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
