import "./EmployeeRegister.css";
import { useState } from "react";
// handle the http request and response
import axios from "axios";
import { Link } from "react-router-dom";

function EmployeeRegister() {
  // get data for useState
  const [emp_name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [NIC, setNIC] = useState("");
  const [phone, setphone] = useState("");
  const [gender, setGender] = useState("male");
  const [emp_type, setEmpType] = useState("Registrar");

  const [responseData, setResponseData] = useState("");

  function sentData(e) {
    e.preventDefault();

    const newEmployee = {
      emp_name,
      email,
      address,
      city,
      NIC,
      phone,
      gender,
      emp_type,
    };
    console.log(newEmployee);

    axios
      .post("http://localhost:8070/signUp/add", newEmployee)
      .then((response) => {
        setResponseData(response.data.message);
        console.log(response.data.message);
        // alert(response.data.message);

        // successfull store data after clear the user inputs
        if (response.data.message == "New Employee Added successful...") {
          setName("");
          setEmail("");
          setAddress("");
          setCity("");
          setGender("male");
          setNIC("");
          setphone("");
          setEmpType("Registrar");
        }

        // Set a timeout to change the value after 5 seconds
        const timeoutId = setTimeout(() => {
          setResponseData("");
        }, 3000);

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
      <div className="container1">
        <div className="emptitle">Employee Registration</div>
        <form onSubmit={sentData}>
          <span
            className={
              responseData == "New Employee Added successful..."
                ? "response"
                : "error"
            }
          >
            {responseData}
          </span>

          <div className="user-details">
            <div className="input-box">
              <span className="details">Employee Full name</span>
              <input
                type="text"
                placeholder="Enter your name"
                required
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={emp_name}
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
              <span className="details">Select Employee Type</span>
              <select
                name="emptype"
                id="emptype"
                required
                onChange={(e) => setEmpType(e.target.value)}
                value={emp_type}
              >
                <option value="Registrar">Registrar</option>
                <option value="Payment Handler">Payment Handler</option>
                <option value="Co-Admin">Co-Admin</option>
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
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
    </>
  );
}
export default EmployeeRegister;
