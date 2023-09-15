import React, { useEffect, useState } from "react";
import StuDashboard from "./StuDashboard";
import "../Teacher/Teacher.css";
// import Widgets from "./Widget";
import StuAttendence from "./StuAttendence";
import StuResult from "./StuResult";
import { useParams,useNavigate } from "react-router-dom";

export default function Student() {
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
      <StuDashboard id={studentId}/>
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
                <div className="listTitle">Exams Results</div>
                <div className="heading">
                  <span className="h-title">ID</span>
                  <span className="h-title">Subject</span>
                  <span className="h-title">Assigment</span>
                  <span className="h-title">subject</span>
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
