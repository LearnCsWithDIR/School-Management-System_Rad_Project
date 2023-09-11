import React, { useState } from "react";
import "./Update.css";
import { Link, useNavigate } from "react-router-dom";
// import "../Utils/ViewData.css";
import "../Registrar/StudentRegister.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function StudentUpdate(props) {
  const { isPopupOpen, setIsPopupOpen, user_obj, setClickbtn } = props;

  // get data for useState
  const [user_id, setUser_id] = useState(user_obj._id);
  const [stu_name, setName] = useState(user_obj.userDetails.name);
  const [email, setEmail] = useState(user_obj.email);
  const [DOB, setDOB] = useState(user_obj.userDetails.DOB);
  const [address, setAddress] = useState(user_obj.userDetails.address);
  const [city, setCity] = useState(user_obj.userDetails.city);
  const [department, setDepartment] = useState(user_obj.userDetails.department);
  const [gender, setGender] = useState(user_obj.userDetails.gender);
  const [parent_name, setParentName] = useState(user_obj.parentDetails.name);
  const [relationship, setRelationship] = useState(
    user_obj.parentDetails.relationship
  );
  const [NIC, setNIC] = useState(user_obj.parentDetails.NIC);
  const [phone, setphone] = useState(user_obj.parentDetails.phone);

  function UpdateData(e) {
    e.preventDefault();

    const newStudent = {
      user_id,
      stu_name,
      email,
      DOB,
      address,
      city,
      NIC,
      phone,
      gender,
      parent_name,
      relationship,
      department,
    };
    console.log(newStudent);

    axios
      .post("http://localhost:8070/student/f/update", newStudent)
      .then((res) => {
        // console.log(res.data.message);
        if (res.data.message == "Already Updated...") {
          toast.warn(res.data.message, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        } else {
          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
        const timeoutId = setTimeout(() => {
          setIsPopupOpen(false);
          setClickbtn(true);
        }, 3500);

        // Clean up the timeout if the component unmounts or before another value change
        return () => {
          clearTimeout(timeoutId);
        };
      })
      .catch((e) => {
        console.log(e);
      });
  }
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="update-form">
        <Link onClick={() => setIsPopupOpen(false)}>
          <span className="close-btn">
            <ion-icon name="close-outline"></ion-icon>
          </span>
        </Link>
      </div>

      <div className="containerStu">
        <div className="title">Student & Parent Registration</div>
        <form onSubmit={UpdateData}>
          <div className="user-details">
            <div className="input-box">
              <span className="details">Student full name</span>
              <input
                type="text"
                placeholder="Enter your name"
                required
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={stu_name}
              />
            </div>

            <div className="input-box">
              <span className="details">Email</span>
              <input
                type="text"
                placeholder="Enter your Email"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
            </div>
            <div className="input-box">
              <span className="details">Date of Birth</span>
              <input
                type="text"
                placeholder="Enter your Birthday"
                required
                onChange={(e) => setDOB(e.target.value)}
                value={DOB}
                pattern="\d{4}-\d{2}-\d{2}" 
              />
            </div>

            <div className="input-box">
              <span className="details">Address</span>
              <input
                type="text"
                placeholder="Enter your Address"
                required
                onChange={(e) => setAddress(e.target.value)}
                value={address}
              />
            </div>

            <div className="input-box">
              <span className="details">City</span>
              <input
                type="text"
                placeholder="Enter your City"
                required
                onChange={(e) => setCity(e.target.value)}
                value={city}
              />
            </div>

            <div className="input-box">
              <span className="details">Select Department</span>
              <select
                name="department"
                id="department"
                required
                onChange={(e) => setDepartment(e.target.value)}
                value={department}
              >
                <option value="Computer Science">Computer Science</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Technology">Technology</option>
                <option value="Science">Science</option>
              </select>
            </div>
          </div>

          <div className="stugender-details">
            <input
              type="radio"
              name="gender"
              id="dot-1"
              checked={gender === "male"}
              onChange={(e) => setGender(e.target.value)}
              value="male"
            />
            <input
              type="radio"
              name="gender"
              id="dot-2"
              checked={gender === "female"}
              onChange={(e) => setGender(e.target.value)}
              value="female"
            />
            <span className="gender-title">Gender</span>
            <div className="category">
              <label for="dot-1">
                <span className="dot one" value="male"></span>
                <span className="gender">Male</span>
              </label>

              <label for="dot-2">
                <span className="dot two" value="female"></span>
                <span className="gender">Female</span>
              </label>
            </div>
          </div>
          <div className="parent-details">
            <div className="input-box">
              <span className="details">Your Parent name</span>
              <input
                type="text"
                placeholder="Enter your Parent name"
                required
                onChange={(e) => setParentName(e.target.value)}
                value={parent_name}
              />
            </div>

            <div className="input-box">
              <span className="details">Parent with relationship</span>
              <select
                name="department"
                id="department"
                required
                onChange={(e) => setRelationship(e.target.value)}
                value={relationship}
              >
                <option value="Mother">Mother</option>
                <option value="Father">Father</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="input-box">
              <span className="details">NIC number</span>
              <input
                type="text"
                placeholder="Enter NIC number"
                required
                onChange={(e) => setNIC(e.target.value)}
                value={NIC}
              />
            </div>

            <div className="input-box">
              <span className="details">Phone number</span>
              <input
                type="text"
                placeholder="Enter Phone number"
                required
                onChange={(e) => setphone(e.target.value)}
                value={phone}
              />
            </div>
          </div>

          <div className="button">
            <input type="submit" value="Update" />
          </div>
        </form>
      </div>
    </>
  );
}
