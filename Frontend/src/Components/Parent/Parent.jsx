import React, { useEffect, useState } from "react";
import ParentDashboard from "./ParentDashboard";
import "../Teacher/Teacher.css";
// import Widgets from "./Widget";
import StuAttendence from "../Student/StuAttendence";
import StuResult from "../Student/StuResult";
import { useParams } from "react-router-dom";

export default function Parent() {
  const { id } = useParams();
  return (
    <>
      <ParentDashboard id={id}/>
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

              <StuAttendence id={id} />
            </div>
            <div id="listContainer-1">
              <div className="result">
                <div className="listTitle">Exam Results</div>
                <div className="heading">
                  <span className="h-title">Result ID</span>
                  <span className="h-title">Subject</span>
                  <span className="h-title">Assigment</span>
                  <span className="h-title">subject</span>
                </div>
                <StuResult id={id} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
