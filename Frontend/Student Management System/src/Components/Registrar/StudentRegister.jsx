import "./StudentRegister.css";
import { useState } from "react";
// handle the http request and response
import axios from "axios";

function StudentRegister() {
  // get data for useState
  const [stu_name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [DOB, setDOB] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [department, setDepartment] = useState("cs");
  const [gender, setGender] = useState("male");
  const [parent_name, setParentName] = useState("");
  const [relationship, setRelationship] = useState("");
  const [NIC, setNIC] = useState("");
  const [phone, setphone] = useState("");
  const [submit, setsubmit] = useState("");

  function sentData(e) {
    e.preventDefault();

    const newStudemt = {
      stu_name,
      email,
      DOB,
      address,
      city,
      department,
      gender,
      parent_name,
      relationship,
      NIC,
      phone,
    };
    console.log(newStudemt);

    axios
      .post("http://localhost:8070/user/signUp/add", newStudemt)
      .then(() => {
        alert("Student Added Succefull");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <>
      <div className="container">
        <div className="title">Student & Parent Registration</div>
        <form onSubmit={sentData}>
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
              />
            </div>
            <div className="input-box">
              <span className="details">Date of Birth</span>
              <input
                type="date"
                placeholder="Enter your Birthday"
                required
                onChange={(e) => setDOB(e.target.value)}
              />
            </div>

            <div className="input-box">
              <span className="details">Address</span>
              <input
                type="text"
                placeholder="Enter your Address"
                required
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div className="input-box">
              <span className="details">City</span>
              <input
                type="text"
                placeholder="Enter your City"
                required
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <div className="input-box">
              <span className="details">Select Department</span>
              <select
                name="department"
                id="department"
                onChange={(e) => setDepartment(e.target.value)}
                required
              >
                <option value="cs" selected>
                  Computer Science
                </option>
                <option value="maths">Mathematics</option>
                <option value="tech">Technolagy</option>
                <option value="sci">Science</option>
              </select>
            </div>
          </div>

          <div className="gender-details">
            <input
              type="radio"
              name="gender"
              id="dot-1"
              value="male"
              checked={gender === "male"}
              onChange={(e) => setGender(e.target.value)}
            />
            <input
              type="radio"
              name="gender"
              id="dot-2"
              value="female"
              checked={gender === "female"}
              onChange={(e) => setGender(e.target.value)}

            />
            <span className="gender-title">Gender</span>
            <div className="catogery">
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
              />
            </div>

            <div className="input-box">
              <span className="details">Parent with relationship</span>
              <input
                type="text"
                placeholder="Relationship"
                required
                onChange={(e) => setRelationship(e.target.value)}
              />
            </div>

            <div className="input-box">
              <span className="details">NIC number</span>
              <input
                type="text"
                placeholder="Enter NIC number"
                required
                onChange={(e) => setNIC(e.target.value)}
              />
            </div>

            <div className="input-box">
              <span className="details">Phone number</span>
              <input
                type="text"
                placeholder="Enter Phone number"
                required
                onChange={(e) => setphone(e.target.value)}
              />
            </div>
          </div>
          <div className="button">
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
    </>
  );
}

export default StudentRegister;
