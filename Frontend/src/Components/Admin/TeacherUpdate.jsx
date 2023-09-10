import React, { useState } from "react";
import "./Update.css";
import { Link, useNavigate } from "react-router-dom";
// import "../Utils/ViewData.css";
import "./TeacherRegister.css";

export default function TeacherUpdate(props) {
  const { isPopupOpen, setIsPopupOpen } = props;

  // get data for useState
  const [teacher_name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [NIC, setNIC] = useState("");
  const [phone, setphone] = useState("");
  const [gender, setGender] = useState("male");
  const [department,setDepartment] = useState("Computer Science");
  const [subject,setSubject] = useState("Programming language");
  

  const callClose = () => {
    setIsPopupOpen(false);
  };
  
  function UpdateData(e){
    e.preventDefault();
    
    console.log(teacher_name,email,address)
  }

  return (
    <>
      <div className="update-form">
        <Link onClick={() => callClose()}>
          <span className="close-btn">
            <ion-icon name="close-outline"></ion-icon>
          </span>
        </Link>
      </div>
      <div className="containerTeach">
        <div className="Teachertitle">Update User's Data...</div>
        <form onSubmit={UpdateData} >
          <div className="user-details">
            <div className="input-box">
              <span className="details">Teacher full name</span>
              <input
                type="text"
                placeholder="Enter your name"
                required
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={teacher_name}
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

            <div className="input-box">
              <span className="details">Select Teacher Department</span>
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

            <div className="input-box">
              <span className="details">Select Teacher Subject</span>
              <select
                name="subject"
                id="subject"
                required
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
              >
                <option value="Programming language">
                  Programming language
                </option>
                <option value="Software Engineering">
                  Software Engineering
                </option>
                <option value="Combined Mathematics">
                  Combined Mathematics
                </option>
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
            </div>
          </div>
          <div className="gender-details">
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

          <div className="button">
            <input type="submit" value="Update" />
          </div>
        </form>
      </div>
    </>
  );
}
