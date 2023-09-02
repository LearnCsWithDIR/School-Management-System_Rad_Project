import "./TeacherRegister.css";
import { useState } from "react";

function TeacherRegister() {
  return (
    <>
      <div className="container1">
        <div className="Teachertitle">Teacher Registration</div>
        <form action="">
          <div className="user-details">
            <div className="input-box">
              <span className="details">Full name</span>
              <input type="text" placeholder="Enter your name" required />
            </div>

            <div className="input-box">
              <span className="details">Email</span>
              <input type="text" placeholder="Enter your Email" required />
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
              <span className="details">NIC number</span>
              <input type="text" placeholder="Enter NIC number" required />
            </div>

            <div className="input-box">
              <span className="details">Phone number</span>
              <input type="text" placeholder="Enter Phone number" required />
            </div>
            <div className="input-box">
              <span className="details">Select Teach Department</span>
              <select name="department" id="department">
                <option value="cs" selected>
                  Computer Science
                </option>
                <option value="maths">Mathematics</option>
                <option value="tech">Technoloagy</option>
                <option value="sci">Science</option>
              </select>
            </div>
            <div className="input-box">
              <span className="details">Select Teach Subject</span>
              <select name="subject" id="subject">
                <option value="pl" selected>
                  Programming language
                </option>
                <option value="se">Software Engineering</option>
                <option value="cm">Combined Mathematics</option>
                <option value="pm">Pure Mathematics</option>
                <option value="arch">Architecture</option>
                <option value="bt">Bio-Technolagy</option>
                <option value="et">Engineering-Technolagy</option>
                <option value="phy">Physics</option>
                <option value="chem">Chemistry</option>
                <option value="astr">Astronomy</option>
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
        
          <div className="button">
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
    </>
  );
}

export default TeacherRegister;
