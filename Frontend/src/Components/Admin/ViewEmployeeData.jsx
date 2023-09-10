import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Utils/ViewData.css";
import axios from "axios";
import Update from "./Update";

export default function ViewEmployeeData() {
  const [EmployeeData, setEmployeeData] = useState([]);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    function getEmployee() {
      axios
        .get("http://localhost:8070/af/f/view")
        .then((res) => {
          setEmployeeData(res.data);
          console.log(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }

    getEmployee();
  }, []);

  const deleteUser = (userId) => {
    axios.delete("http://localhost:8070/af/f/delete/" + userId).then((res) => {
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
                {EmployeeData.map((user, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{user.empDetails.name}</td>
                      <td>{user.empDetails.address}</td>
                      <td>{user.email}</td>
                      <td>{user.empDetails.NIC}</td>
                      <td>{user.empDetails.phone}</td>
                      <td>{user.empDetails.emp_type}</td>
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
                          onClick={() => {
                            togglePopup();
                          }}
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
            <div className="popup">
              {/* Add the update form and logic here */}
              {/* // Inside the popup in UserDetails.js */}
              <Update />
              <button onClick={togglePopup}>Close</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
