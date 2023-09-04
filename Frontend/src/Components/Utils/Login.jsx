import "./Login.css";
import { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [useremail, setUserName] = useState("");
  const [userpassword, setPassword] = useState("");
  const [userType, setuserType] = useState([]);

  // for response success message
  const [message, setMessage] = useState("");
  const [showpassword, setshowpassword] = useState(false);

  const navigate = useNavigate();

  function setData(e) {
    e.preventDefault();

    const UserLogin = {
      useremail,
      userpassword,
    };

    axios
      .post("http://localhost:8070/user/signIn", UserLogin)
      .then((res) => {
        setuserType(res.data.type);
        setMessage(res.data.message);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });

    if (message == "Sign-in successful") {
      setUserName("");
      setPassword("");
    }

    // "Registrar">Registrar</option>
    // <option value="Payment Handler">Payment Handler</option>
    // <option value="Co-Admin">

    // Set a timeout to change the value after 5 minutes (300,000 milliseconds)
    const timeoutId0 = setTimeout(() => {
      // setMessage("");
      setuserResponse((userResponse.message = ""));
    }, 3000);

    if (userResponse.type == "Admin" || userResponse.type == "Co-Admin") {
      navigate("/Admin");
    }
    console.log(UserLogin);
    // alert(UserLogin);
  }
  return (
    <>
      <Navbar />
      <div id="container_login">
        <div id="signtitle_login">Welcome Back !</div>
        <div className="signtitle_1">Sign In</div>
        <div className="signtitle_1">to your account</div>
        <form onSubmit={setData}>
          <span
            className={message == "Sign-in successful" ? "response" : "error"}
          >
            {/* fix the error resposne for user state */}
            {message}
          </span>
          <div id="user-details_login">
            <div className="input-box_login">
              <span className="details_login">Username</span>
              <input
                type="text"
                placeholder="Enter Username"
                required
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>

            <div className="input-box_login">
              <span className="details_login">Password</span>
              <input
                type={showpassword ? "text" : "password"}
                placeholder="Enter Passsword"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="input-box_login">
            <input
              type="checkbox"
              id="show"
              name="show"
              value="show"
              checked={showpassword}
              onClick={(e) => {
                setshowpassword(e.target.checked);
              }}
            />
            <span className="details_login_check">
              {showpassword ? "Hide Password" : "Show Password"}
            </span>
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
