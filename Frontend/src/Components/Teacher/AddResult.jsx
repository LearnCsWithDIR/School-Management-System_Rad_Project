import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../Utils/ViewData.css";
import "./AddResult.css";
import axios from "axios";
import TeacherDashboard from "./TeacherDashboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddResult() {
  // const {teachId,setTeachId} = useState("");
  const { id } = useParams();
  // setTeachId(id);
  console.log(id);

  const [students, setStudents] = useState([]);
  const [subjectMark, setSubjectMark] = useState("F");
  const [assignmentMark, setAssigmentMark] = useState("F");
  const [subjectName, setSubjectName] = useState("maths");

  const [ArraySubjectMarks, setArraySubjectMarks] = useState(
    Array(students.length).fill("F")
  );
  const [ArrayAssignmentMarks, setArrayAssignmentMarks] = useState(
    Array(students.length).fill("F")
  );

  const addResult = (userId) => {
    // e.preventDefault();

    const newResult = {
      stu_id: userId,
      subjectName: id,
      subjectMark,
      assignmentMark,
    };

    // for (let index = 0; index < array.length; index++) {
    //   const element = array[index];

    // }
    console.log(ArraySubjectMarks);
    console.log(ArrayAssignmentMarks);

    axios
      .post("http://localhost:8070/teacher/f/add-result", newResult)
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

  return (
    <>
      <TeacherDashboard />
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
          {/* <Link className="border-shadow" to="/Admin-TRegister">
            <span className="navigator">
              <ion-icon name="person"></ion-icon>New Teacher +
            </span>
          </Link> */}
          <p>
            Exam Subject : <span className="teachId"> {id} </span>
          </p>
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
                            onChange={(e) => {
                              const newSubjectMarks = [...ArraySubjectMarks];
                              newSubjectMarks[index] = e.target.value;
                              setArraySubjectMarks(newSubjectMarks);

                              setSubjectMark(e.target.value);
                            }}
                            value={ArraySubjectMarks[index]}
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
                              const newAssigmnetMarks = [
                                ...ArrayAssignmentMarks,
                              ];
                              newAssigmnetMarks[index] = e.target.value;
                              setArrayAssignmentMarks(newAssigmnetMarks);

                              setAssigmentMark(e.target.value);
                            }}
                            value={ArrayAssignmentMarks[index]}
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
                          <span id="add-button">
                            <Link
                              onClick={() => {
                                addResult(user._id);
                              }}
                            >
                              <input id="add" type="submit" value="Add" />
                            </Link>
                          </span>
                        </td>
                        <td>
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
