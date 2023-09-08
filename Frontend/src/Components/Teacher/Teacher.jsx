import React from "react";
import TeacherDashboard from "./TeacherDashboard";
import "./Teacher.css";
import Widgets from "./Widget";
import Submissions from "./Submissions";
export default function Teacher() {
  return (
    <>
      <TeacherDashboard />
      <div className="homeContainer">
        <div className="widgets">
          <Widgets type="Students" count="25868" precent="28%" />
          <Widgets type="Assigments" count="75008" precent="58.4%" />
          <Widgets type="Submited" count="50868" precent="75%" />
          <Widgets type="Fees Payed" count="23885" precent="30%" />
        </div>
        <div className="listContainer">
          {/* <Widgets type="Students" count="25868" precent="28%" /> */}
          {/* <Widgets type="Assigments" count="75008" precent="58.4%" /> */}
         
          {/* <Submissions /> */}

          <div className="listTitle">
            Assigment Submissions
          </div>
          <div className="heading">
          <span className="h-title">ID</span>
          <span className="h-title">Name</span>
          <span className="h-title">Submit Date</span>
          <span className="h-title">Files</span>
        </div>
          <Submissions />

        </div>

      </div>
    </>
  );
}
