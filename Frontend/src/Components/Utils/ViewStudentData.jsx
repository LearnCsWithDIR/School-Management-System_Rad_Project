import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ViewData.css";
import axios from "axios";
import StudentUpdate from "../Admin/StudentUpdate";
export default function ViewStudentData() {
  const [studentData, setStudentData] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [userObj, setUserObj] = useState({});
  const [clickbtn, setClickbtn] = useState(false);

  useEffect(() => {
    function getStudent() {
      axios
        .get("http://localhost:8070/student/f/view")
        .then((res) => {
          setStudentData(res.data);
          console.log(res.data);
          console.log(res.data[0].authentication.verified);
        })
        .catch((e) => {
          console.log(e);
        });
    }

    getStudent();
  }, []);

  const deleteUser = (userId) => {
    axios
      .delete("http://localhost:8070/student/f/delete/" + userId)
      .then((res) => {
        console.log(res.data.status);
        alert("Are you Sure ?");
        location.reload();
      });
  };

  const togglePopup = (userId) => {
    // get the update stage for user user object
    if (!isPopupOpen) {
      studentData.map((user, index) => {
        if (userId == user._id) {
          // console.log(user);
          setUserObj(user);
        }
      });
    }
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
      <div id="component">
        <div className="DataContainer">
          <Link className="border-shadow" to="/Admin-SRegister">
            <span className="navigator">
              <ion-icon name="person"></ion-icon>New Student +
            </span>
          </Link>
          <form action="">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Email</th>
                  <th>Department</th>
                  <th>Parent Name</th>
                  <th>Phone number</th>
                  <th>Verified</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {studentData.map((user, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{user.userDetails.name}</td>
                      <td>{user.userDetails.address}</td>
                      <td>{user.email}</td>
                      <td>{user.userDetails.department}</td>
                      <td>{user.parentDetails.name}</td>
                      <td>{user.parentDetails.phone}</td>
                      <td>
                        {user.authentication.verified ? (
                          <span id="verified-icon1">
                            <ion-icon name="checkmark-circle-outline"></ion-icon>
                          </span>
                        ) : (
                          <span id="verified-icon2">
                            <ion-icon name="close-circle-outline"></ion-icon>
                          </span>
                        )}
                      </td>

                      <td>
                        <Link
                          className="icon-"
                          to=""
                          onClick={() => togglePopup(user._id)}
                        >
                          <span className="icons" title="Edit">
                            <ion-icon name="create-outline"></ion-icon>
                          </span>
                        </Link>
                        {/* // delete data */}
                        <Link
                          className="icon-"
                          id={user._id}
                          onClick={() => deleteUser(user._id)}
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

          {isPopupOpen && (
              <div className="popup-stu">
                {/* Add the update form and logic here */}
                {/* // Inside the popup in UserDetails.js */}
                <StudentUpdate
                  isPopupOpen={isPopupOpen}
                  setIsPopupOpen={setIsPopupOpen}
                  user_obj={userObj}
                  setClickbtn={setClickbtn}
                />
              </div>
            )}
            {clickbtn ? location.reload() : ""}
        </div>
      </div>
    </>
  );
}
