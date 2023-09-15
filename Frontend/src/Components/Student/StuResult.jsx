import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../Teacher/Submissions.css";

export default function StuResult(props) {
  const { id } = props;

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

  const [results, setResults] = useState([]);

  useEffect(() => {
    function getStudents() {
      axios
        .get("http://localhost:8070/student/f/view-results")
        .then((res) => {
          setResults(res.data);
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
              <tbody className="datas1">
              {results.map((user, index) => {
                  if (user.stu_id === studentId) {
                    return (
                      <tr key={index}>
                        <td>{index + 10752}</td>
                        <td>{user.subjectName}</td>
                        <td>{user.resultDetails.assignmentMark}</td>
                        <td>{user.resultDetails.subjectMark}</td>
                      </tr>
                    );
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
