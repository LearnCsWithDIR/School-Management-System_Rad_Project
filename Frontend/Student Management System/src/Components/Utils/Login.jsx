import "./Login.css";
import { useState } from "react";
import Navbar from "./Navbar";
import axios from 'axios';

function Login() {
    return (
      <>
      <Navbar />
        <div className="container2">
          <div className="signtitle1">Welcome Back !</div>
          <div className="signtitle">Sign In</div>
          <div className="signtitle">to your account</div>
          <form action="">
            <div className="user-details">
        
              <div className="input-box">
                <span className="details">Username</span>
                <input type="text" placeholder="Enter Username" required />
              </div>
  
              <div className="input-box">
                <span className="details">Password</span>
                <input type="password" placeholder="Enter Passsword" required />
              </div>
            </div>

            <div className="button">
              <input type="submit" value="Login" />
            </div>
          </form>
        </div>
      </>
    );
  }
  
  export default Login;
  
