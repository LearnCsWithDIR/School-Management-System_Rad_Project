import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

import "../Teacher/Submissions.css";
// import "./Teacher.css";

export default function StuAttendence(props) {
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
  const [attendence, setAttendence] = useState([]);

  useEffect(() => {
    function getStudents() {
      axios
        .get("http://localhost:8070/student/f/view-attendence")
        .then((res) => {
          setAttendence(res.data);
          console.log(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }

    getStudents();
  }, []);

  return (
    <>
      <div className="Ab-widegt">
        <div className="Ab-left">
          <form action="">
            <table className="tables1">
              <tbody className="datas">
                {attendence.map((user, index) => {
                  // console.log("esgs",user.stu_id);
                  // console.log("abdde :",studentId);

                  if (user.stu_id === studentId) {
                    console.log("map isahfef");
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{user.subjectName}</td>
                        <td>{user.AttendType}</td>
                        <td>{user.Attendence.substring(0, 10)}</td>
                      </tr>
                    );
                  } else {
                    <p>Data Not Found</p>;
                  }
                })}
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </>
  );
}
