import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Utils/ViewData.css";
import "./AddResult.css";
import axios from "axios";
import TeacherDashboard from "./TeacherDashboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddResult() {
  const [students, setStudents] = useState([]);
  const [subjectMark, setSubjectMark] = useState("F");
  const [assignmentMark, setAssigmentMark] = useState("F");
  const [subjectName, setSubjectName] = useState("F");
  const [submitSuccess, setsubmitSuccess] = useState("");

  function addResult(userId) {
    e.preventDefault();

    const newResult = {
      stu_id: userId,
      subjectName,
      subjectMark,
      assignmentMark,
    };
    console.log(newResult);

    axios
      .post("http://localhost:8070/teacher/f/add-result", newResult)
      .then((response) => {
        setResponseData(response.data.message);
        console.log(response.data.message);
        // alert(response.data.message);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  var marks = [1, 2, 8];
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

  // const addResult = (userId) => {
  //   console.log("click");
  //   console.log(subjectMark + " : " + assigmentMark + " : " + userId);
  //   console.log(assigmentMark);
  //   alert("asdfg");

  // };

  // push to user id vice data
  const assigmentAdd = (e, id) => {
    setAssigmentMark({ userID: id, mark: e.target.value });
    // console.log(assigmentMark);
    // pushV(assigmentMark);

    const selectedMark = e.target.value;
    const updatedAssignmentMarks = assigmentMark.map((mark) => {
      if (mark.userId === user._id) {
        return { userId: user._id, assignmentMark: selectedMark };
      }
      return mark;
    });
    setAssigmentMark(updatedAssignmentMarks);
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
                            id="department_123"
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
                            id="department_123"
                            required
                            onChange={(e) => {
                              assigmentAdd(e, user._id);
                            }}
                            // value={ assigmentMark.} {assigmentMark.}
                            // style="width:200px;"
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
                                onClick={() => {
                                  addResult(user._id);
                                }}
                              />
                            </span>
                          ) : /*  submit after */
                          user.authentication.verified ? (
                            <span id="add-button">
                              <input
                                id="pending"
                                type="submit"
                                value="Pending"
                                disabled
                              />
                            </span>
                          ) : (
                            /*  submit after success */
                            <span id="add-button">
                              <input
                                id="success"
                                type="submit"
                                value="Success"
                                disabled
                              />
                            </span>
                          )}
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
