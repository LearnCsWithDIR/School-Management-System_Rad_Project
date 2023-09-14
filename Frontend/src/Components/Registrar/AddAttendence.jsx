import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../Utils/ViewData.css";
import "../Teacher/AddResult.css";
import "./AddAttendence.css";
import axios from "axios";
import RegiDashboard from "./RegiDashboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddAttendence() {
  const { id } = useParams();

  // format the date
  function formatDate(inputDate) {
    const dateObject = new Date(inputDate);
    const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
    const day = dateObject.getDate().toString().padStart(2, "0");
    const year = dateObject.getFullYear().toString();
    return `${year}-${month}-${day}`;
  }

  const inputDate = new Date();
  const formattedDate = formatDate(inputDate);

  const [students, setStudents] = useState([]);

  const [subject, setSubject] = useState("Programming language");
  const [attend, setAttend] = useState("absent");
  const [attendDate, setAttendDate] = useState(formattedDate);

  const [ArrayAttendence, setArrayAttendence] = useState(
    Array(students.length).fill("absent")
  );

  // I want to pass the students names only selected courese by devided
  useEffect(() => {
    function getStudents() {
      axios
        .get("http://localhost:8070/student/f/view")
        .then((res) => {
          setStudents(res.data);
          // console.log(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }

    getStudents();
  }, []);

  const Attendence = (userId) => {
    // e.preventDefault();

    const newAttendence = {
      stu_id: userId,
      subjectName: subject,
      AttendType: attend,
      Attendence: attendDate,
    };
    console.log(newAttendence);

    axios
      .post("http://localhost:8070/student/f/add-attendence", newAttendence)
      .then((response) => {
        // setResponseData(response.data.message);
        // alert(response.data.message);
        if (response.data.message == "Already Updated...") {
          toast.warn(response.data.message, {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        } else {
          toast.success(response.data.message, {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // I want to pass the students names only selected courese by devided
  useEffect(() => {
    function getStudents() {
      axios
        .get("http://localhost:8070/student/f/view")
        .then((res) => {
          setStudents(res.data);
          // console.log(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }

    getStudents();
  }, []);

  const deleteAttend = (userId) => {
    const attendDelete = {
      stu_id: userId,
      subjectName: subject,
    };

    axios
      .delete("http://localhost:8070/student/f/delete-attend/", {
        data: {
            stu_id: userId,
            subjectName: subject, // Add additional data if needed
        },
      })
      .then((res) => {
        // console.log(res.data.status);
        if (res.data.message == "Attendece Deleted") {
          toast.error(res.data.message, {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        } else {
          toast.warn(res.data.message, {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
        alert("Are you Sure ?");
        // location.reload();
      });
  };

  return (
    <>
      <RegiDashboard />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div id="component">
        <div className="DataContainer">
          <p>Select Subject</p>
          <select
            name="subject"
            id="subject_0"
            required
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
          >
            <option value="Programming language">Programming language</option>
            <option value="Software Engineering">Software Engineering</option>
            <option value="Combined Mathematics">Combined Mathematics</option>
            <option value="Pure Mathematics">Pure Mathematics</option>
            <option value="Architecture">Architecture</option>
            <option value="Bio-Technology">Bio-Technology</option>
            <option value="Engineering-Technology">
              Engineering-Technology
            </option>
            <option value="Physics">Physics</option>
            <option value="Chemistry">Chemistry</option>
            <option value="Astronomy">Astronomy</option>
          </select>

          <div>
            <form action="">
              <label id="date-l" htmlFor="">
                Attendence Date :
              </label>
              <input
                id="date-i"
                type="date"
                placeholder="date"
                value={attendDate}
                onChange={(e) => setAttendDate(e.target.value)}
              />
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Attendence</th>
                    <th>Submit</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((user, index) => {
                    return user.userDetails.subject.map((sub) => {
                      if (sub === subject) {
                        // console.log(index, sub, user.userDetails.name);
                        return (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{user.userDetails.name}</td>
                            <td>
                              <select
                                name="department"
                                id="department_123"
                                required
                                onChange={(e) => {
                                  const newAttend = [...ArrayAttendence];
                                  newAttend[index] = e.target.value;
                                  setArrayAttendence(newAttend);

                                  setAttend(e.target.value);
                                }}
                                value={ArrayAttendence[index]}
                              >
                                <option value="present">present</option>
                                <option value="absent" selected>
                                  absent
                                </option>
                                <option value="late">late</option>
                              </select>
                            </td>
                            <td>
                              <span id="add-button">
                                <Link
                                  onClick={() => {
                                    Attendence(user._id);
                                  }}
                                >
                                  <input id="add" type="submit" value="Save" />
                                </Link>
                              </span>
                            </td>
                            <td>
                              {/* // delete data */}
                              <Link
                                className="icon-"
                                id={user._id}
                                onClick={() => deleteAttend(user._id)}
                              >
                                <span className="icons" title="Delete">
                                  <ion-icon name="trash-outline"></ion-icon>
                                </span>
                              </Link>
                            </td>
                          </tr>
                        );
                      } else {
                        return;
                      }
                    });
                  })}
                </tbody>
              </table>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
