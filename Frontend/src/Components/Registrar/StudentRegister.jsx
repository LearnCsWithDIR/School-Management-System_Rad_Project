import "./StudentRegister.css";
import { useState } from "react";
// handle the http request and response
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function StudentRegister() {
  // get data for useState
  const [stu_name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [DOB, setDOB] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [department, setDepartment] = useState("Computer Science");
  const [gender, setGender] = useState("male");
  const [parent_name, setParentName] = useState("");
  const [relationship, setRelationship] = useState("Mother");
  const [NIC, setNIC] = useState("");
  const [phone, setphone] = useState("");

  const [responseData, setResponseData] = useState("");

  const navigate = useNavigate();

  function sentData(e) {
    e.preventDefault();

    const newStudent = {
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
    console.log(newStudent);

    axios
      .post("http://localhost:8070/user/signUp/add", newStudent)
      .then((response) => {
        setResponseData(response.data.message);
        console.log(response.data.message);
        // alert(response.data.message);

        // successfull store data after clear the user inputs
        if (response.data.message == "New Student Added successful...") {
          setName("");
          setEmail("");
          setDOB("");
          setAddress("");
          setCity("");
          setDepartment("Computer Science");
          setGender("male");
          setParentName("");
          setRelationship("Mother");
          setNIC("");
          setphone("");
        }
        
        // Set a timeout to change the value after 5 minutes (300,000 milliseconds)
        const timeoutId0 = setTimeout(() => {
          setResponseData("");
        }, 3000);
        
        // navigation
        // const timeoutId1 = setTimeout(() => {
        //   navigate("/");
        // }, 7000);
        
        // Clean up the timeout if the component unmounts or before another value change
        return () => {
          clearTimeout(timeoutId0);
        };
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <>
      <div className="containerStu">
        <div className="title">Student & Parent Registration</div>
        <form onSubmit={sentData}>
          <span
            className={
              responseData == "New Student Added successful..."
                ? "response"
                : "error"
            }
          >
            {responseData}
          </span>
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
                type="date"
                placeholder="Enter your Birthday"
                required
                onChange={(e) => setDOB(e.target.value)}
                value={DOB}
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
                <option value="Computer Science">
                  Computer Science
                </option>
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
                <option value="Mother">
                  Mother
                </option>
                <option value="Father">Father</option>
                <option value="Other">Other</option>
              </select>
{/*               
              <input
                type="text"
                placeholder="Relationship"
                required
                onChange={(e) => setRelationship(e.target.value)}
                value={relationship}
              /> */}
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
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
    </>
  );
}

export default StudentRegister;
