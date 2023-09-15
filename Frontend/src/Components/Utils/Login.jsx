import "./Login.css";
import { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setUserName] = useState("");
  const [userpassword, setPassword] = useState("");
  const [userType, setuserType] = useState("");
  const [teachSubject, setTeachSubject] = useState("");

  // for response success message
  const [message, setMessage] = useState("");
  const [showpassword, setshowpassword] = useState(false);

  const navigate = useNavigate();

  function setData(e) {
    e.preventDefault();

    const UserLogin = {
      email,
      userpassword,
    };

    axios
      .post("http://localhost:8070/user/signIn", UserLogin)
      .then((res) => {
        // console.log(res.data);
        setuserType(res.data.type);
        setMessage(res.data.message);
        // console.log(userType);

        if (res.data.message == "Sign-in successful") {
          setUserName("");
          setPassword("");
          toast.success(res.data.message, {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        } else {
          toast.error(res.data.message, {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }

        // Set a timeout to change the value after 3 seconds
        const timeoutId0 = setTimeout(() => {
          setMessage("");
        }, 2000);

        const timeoutId1 = setTimeout(() => {
          if (res.data.type == "Admin" || res.data.type == "Co-Admin") {
            navigate("/ViewTeacher");
          } else if (res.data.type == "student") {
            const id = res.data.stu_id;

            navigate(`/Student/${id}`);
            // navigate("/Admin");
          } else if (res.data.type == "parent") {
            // console.log("parent");
            const id = res.data.stu_id; 
            navigate(`/Parent/${id}`);

          } else if (res.data.type == "Registrar") {
            // console.log("Registrar");
            navigate("/Student-Attendence");
            
          } else if (res.data.type == "teacher") {
            // console.log("Teacher");
            setTeachSubject(res.data.subject);
            // console.log(teachSubject);
            const id = res.data.subject;
            navigate(`/Teacher/${id}`);
          }
        }, 2000);
        // setuserType("");

        return () => {
          clearTimeout(timeoutId0);
          clearTimeout(timeoutId1);
        };
      })
      .catch((e) => {
        console.log(e);
      });

    // console.log(message);
  }
  return (
    <>
      <Navbar />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
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
                value={email}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>

            <div className="input-box_login">
              <span className="details_login">Password</span>
              <input
                type={showpassword ? "text" : "password"}
                placeholder="Enter Passsword"
                required
                value={userpassword}
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
