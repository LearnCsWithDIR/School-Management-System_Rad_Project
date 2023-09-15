import React, { useEffect, useState } from "react";
import ParentDashboard from "./ParentDashboard";
import "../Teacher/Teacher.css";
// import Widgets from "./Widget";
import StuAttendence from "../Student/StuAttendence";
import StuResult from "../Student/StuResult";
import { useParams ,useNavigate} from "react-router-dom";

export default function Parent() {
  const { id } = useParams();

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

  // console.log("Parent for ID: ",studentId);

  const navigate = useNavigate();

  if (!studentId) {
    navigate("/login");
  }

  return (
    <>
      <ParentDashboard id={studentId}/>
      <div className="homeContainer">
        <div className="listContainer">
          {/* <Submissions /> */}
          <div className="all">
            <div>
              <div className="listTitle">View Attendence</div>
              <div className="heading">
                <span className="h-title">Attend ID</span>
                <span className="h-title">Subject</span>
                <span className="h-title">Attendence</span>
                <span className="h-title">Date</span>
              </div>

              <StuAttendence id={studentId} />
            </div>
            <div id="listContainer-1">
              <div className="result">
                <div className="listTitle">Exam Results</div>
                <div className="heading1">
                  <span className="h-title1">ID</span>
                  <span className="h-title1">Subject</span>
                  <span className="h-title1">Assigment</span>
                  <span className="h-title1">subject</span>
                </div>
                <StuResult id={studentId} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
