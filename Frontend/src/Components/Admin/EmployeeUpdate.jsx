import "./EmployeeRegister.css";
import { useState } from "react";
// handle the http request and response
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Update.css";

function EmployeeUpdate(props) {
  const { isPopupOpen, setIsPopupOpen, user_obj, setClickbtn } = props;

  console.log("update panel",user_obj);
  // get data for useState
  const [user_id, setUser_id] = useState(user_obj._id);
  const [emp_name, setName] = useState(user_obj.empDetails.name);
  const [email, setEmail] = useState(user_obj.email);
  const [address, setAddress] = useState(user_obj.empDetails.address);
  const [city, setCity] = useState(user_obj.empDetails.city);
  const [NIC, setNIC] = useState(user_obj.empDetails.NIC);
  const [phone, setphone] = useState(user_obj.empDetails.phone);
  const [gender, setGender] = useState(user_obj.empDetails.gender);
  const [emp_type, setEmpType] = useState(user_obj.empDetails.emp_type);

  const [responseData, setResponseData] = useState("");

  function sentData(e) {
    e.preventDefault();

    const newEmployee = {
      user_id,
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
      .post("http://localhost:8070/af/f/update", newEmployee)
      .then((res) => {
        // console.log(res.data.message);
        if (res.data.message == "Already Updated...") {
          toast.warn(res.data.message, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        } else {
          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
        const timeoutId = setTimeout(() => {
          setIsPopupOpen(false);
          setClickbtn(true);
        }, 3500);

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
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="update-form">
        <Link onClick={() => setIsPopupOpen(false)}>
          <span className="close-btn">
            <ion-icon name="close-outline"></ion-icon>
          </span>
        </Link>
      </div>
      <div className="container1">
        <div className="emptitle">Employee Data Update</div>
        <form onSubmit={sentData}>
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
export default EmployeeUpdate;
