import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Utils/ViewData.css";
import axios from "axios";

export default function ViewEmployeeData() {
  const [studentData, setStudentData] = useState([]);
  useEffect(() => {
    function getStudent() {
      axios
        .get("http://localhost:8070/student/f/view")
        .then((res) => {
          setStudentData(res.data);
          console.log(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }

    getStudent();
  }, []);

  const deleteUser= (userId) => {
    axios
      .delete("http://localhost:8070/student/f/delete/" + userId)
      .then((res) => {
        console.log(res.data.status);
        location.reload();
      });
  }

  return (
    <>
      <div id="component">
        <div className="DataContainer">
          <Link className="border-shadow" to="/Admin-ERegister">
            <span className="navigator">
              <ion-icon name="person"></ion-icon>New Employee +
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
                  <th>NIC</th>
                  <th>Phone number</th>
                  <th>Type</th>
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
                      <td>{user.authentication.verified}</td>
                      <td>
                        <Link className="icon-" to="">
                          <span className="icons" title="Edit">
                            <ion-icon name="create-outline"></ion-icon>
                          </span>
                        </Link>
                        {/* // delete data */}
                        <Link className="icon-" id={user._id} onClick={()=> deleteUser(user._id)}>

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
    </>
  );
}
