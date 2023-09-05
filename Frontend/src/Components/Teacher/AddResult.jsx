import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Utils/ViewData.css";
import "./AddResult.css";
import axios from "axios";
import TeacherDashboard from "./TeacherDashboard";

export default function AddResult() {
  const [students, setStudents] = useState([]);
  const [subjectMark, setSubjectMark] = useState("F");
  const [assigmentMark, setAssigmentMark] = useState("F");
  const [submitSuccess, setsubmitSuccess] = useState();
  useEffect(() => {
    function getStudents() {
      axios
        .get("http://localhost:8070/student/f/view")
        .then((res) => {
          setStudents(res.data);
          console.log(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }

    getStudents();
  }, []);

  // const deleteUser = (userId) => {
  //   axios
  //     .delete("http://localhost:8070/teacher/f/delete/" + userId)
  //     .then((res) => {
  //       console.log(res.data.status);
  //       alert("Are you Sure ?");
  //       location.reload();
  //     });
  // };

  const addResult = (userId) => {
    console.log("click");
    console.log(subjectMark + " : " + assigmentMark + " : " + userId);
  };

  return (
    <>
      <TeacherDashboard />
      <div id="component">
        <div className="DataContainer">
          {/* <Link className="border-shadow" to="/Admin-TRegister">
            <span className="navigator">
              <ion-icon name="person"></ion-icon>New Teacher +
            </span>
          </Link> */}
          <div>
            <form action="">
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Subject Marks</th>
                    <th>Assigment Marks</th>
                    <th>Submit</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((user, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{user.userDetails.name}</td>
                        <td>
                          <select
                            name="department"
                            id="department"
                            required
                            onChange={(e) => setSubjectMark(e.target.value)}
                            value={subjectMark}
                          >
                            <option value="A+">A+</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="S">S</option>
                            <option value="F" selected>
                              F
                            </option>
                          </select>
                        </td>
                        <td>
                          <select
                            name="department"
                            id="department"
                            required
                            onChange={(e) => setAssigmentMark(e.target.value)}
                            value={assigmentMark}
                          >
                            <option value="A+">A+</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="S">S</option>
                            <option value="F" selected>
                              F
                            </option>
                          </select>
                        </td>
                        <td>
                          {/*  submit before */}
                          {user.authentication.verified ? (
                            <span id="add-button">
                              <input
                              id="add"
                                type="submit"
                                value="Add"
                                onClick={() => addResult(user._id)}
                              />
                            </span>
                          ) : /*  submit after */
                          user.authentication.verified ? (
                            <span id="add-button">
                              <input id="pending" type="submit" value="Pending" disabled />
                            </span>
                          ) : (
                            /*  submit after success */
                            <span id="add-button">
                              <input id="success" type="submit" value="Success" disabled />
                            </span>
                          )
                          }
                        </td>
                        <td>
                          <Link className="icon-" to="">
                            <span className="icons" title="Edit">
                              <ion-icon name="create-outline"></ion-icon>
                            </span>
                          </Link>
                          {/* // delete data */}
                          <Link
                            className="icon-"
                            id={user._id}
                            // onClick={() => deleteUser(user._id)}
                          >
                            <span className="icons" title="Delete">
                              <ion-icon name="trash-outline"></ion-icon>
                            </span>
                          </Link>
                        </td>
                      </tr>
                    );
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
