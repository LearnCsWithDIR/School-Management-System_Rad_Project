import "./StudentRegister.css";
import { useState } from "react";

function StudentRegister() {
  return (
    <>
      <div className="container">
        <div className="title">Student & Parent Registration</div>
        <form action="">
          <div className="user-details">
            <div className="input-box">
              <span className="details">Student full name</span>
              <input type="text" placeholder="Enter your name" required />
            </div>

            <div className="input-box">
              <span className="details">Email</span>
              <input type="text" placeholder="Enter your Email" required />
            </div>
            <div className="input-box">
              <span className="details">Date of Birth</span>
              <input type="date" placeholder="Enter your Birthday" required />
            </div>

            <div className="input-box">
              <span className="details">Address</span>
              <input type="text" placeholder="Enter your Address" required />
            </div>

            <div className="input-box">
              <span className="details">City</span>
              <input type="text" placeholder="Enter your City" required />
            </div>

            <div className="input-box">
              <span className="details">Select Department</span>
              <select name="department" id="department">
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
            <input type="radio" name="gender" id="dot-1" />
            <input type="radio" name="gender" id="dot-2" />
            <span className="gender-title">Gender</span>
            <div className="catogery">
              <label for="dot-1">
                <span className="dot one"></span>
                <span className="gender">Male</span>
              </label>

              <label for="dot-2">
                <span className="dot two"></span>
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
              />
            </div>

            <div className="input-box">
              <span className="details">Parent with relationship</span>
              <input type="text" placeholder="Relationship" required />
            </div>

            <div className="input-box">
              <span className="details">NIC number</span>
              <input type="text" placeholder="Enter NIC number" required />
            </div>

            <div className="input-box">
              <span className="details">Phone number</span>
              <input type="text" placeholder="Enter Phone number" required />
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
