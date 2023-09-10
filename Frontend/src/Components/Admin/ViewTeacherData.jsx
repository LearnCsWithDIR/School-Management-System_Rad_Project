import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Utils/ViewData.css";
import axios from "axios";
import TeacherUpdate from "./TeacherUpdate";

export default function ViewTeacherData() {
  const [teacherData, setTeacherData] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    function getTeacher() {
      axios
        .get("http://localhost:8070/teacher/f/view")
        .then((res) => {
          setTeacherData(res.data);
          console.log(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }

    getTeacher();
  }, []);

  const deleteUser = (userId) => {
    axios
      .delete("http://localhost:8070/teacher/f/delete/" + userId)
      .then((res) => {
        console.log(res.data.status);
        alert("Are you Sure ?");
        location.reload();
      });
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
      <div id="component">
        <div className="DataContainer">
          <Link className="border-shadow" to="/Admin-TRegister">
            <span className="navigator">
              <ion-icon name="person"></ion-icon>New Teacher +
            </span>
          </Link>
          <div>
            {teacherData.length > 0 ? (
              <form action="">
                <table className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>NIC</th>
                      <th>Phone number</th>
                      <th>Department</th>
                      <th>Subject</th>
                      <th>Verified</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {teacherData.map((user, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{user.teacherDetails.name}</td>
                          <td>{user.email}</td>
                          <td>{user.teacherDetails.NIC}</td>
                          <td>{user.teacherDetails.phoneNo}</td>
                          <td>{user.teacherDetails.department}</td>
                          <td>{user.teacherDetails.subject}</td>
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
                              onClick={() => togglePopup()}
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
            ) : (
              <span id="No-Data"> No Data Found</span>
            )}
            {isPopupOpen && (
              <div className="popup">
                {/* Add the update form and logic here */}
                {/* // Inside the popup in UserDetails.js */}
                <TeacherUpdate
                  isPopupOpen={isPopupOpen}
                  setIsPopupOpen={setIsPopupOpen}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
