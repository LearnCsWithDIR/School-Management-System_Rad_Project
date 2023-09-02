import "./Login.css";
import { useState } from "react";
import Navbar from "./Navbar";

function Login() {
    return (
      <>
      <Navbar />
        <div id="container_login">
          <div id="signtitle_login">Welcome Back !</div>
          <div className="signtitle_1">Sign In</div>
          <div className="signtitle_1">to your account</div>
          <form action="">
            <div id="user-details_login">

              <div className="input-box_login">
                <span className="details_login">Username</span>
                <input type="text" placeholder="Enter Username" required />
              </div>

              <div className="input-box_login">
                <span className="details_login">Password</span>
                <input type="password" placeholder="Enter Passsword" required />
              </div>
            </div>

            <div id="button_login">
              <input type="submit" value="Login" />
            </div>
          </form>
        </div>
      </>
    );
  }

  export default Login;