import "./HomePage.css";
import Navbar from "./Navbar";
import image from "../../assets/sms1.jpg";
import { Link } from "react-router-dom";
// import "../App.css";
function HomePage() {
  return (
    <div className="HomePage">
      <Navbar />
      <div className="content">
        <h1>Student Management System</h1>
        <p>
          Welcome to the Future of Sipsala Education Management System.
           Where Innovation Meets Education. <br />
          Streamline administrative tasks so you can focus on teaching and
          inspiring. Transform student data into actionable insights for
          academic success
        </p>
        <Link to="/login">
          <button>
            <span className="signIn"></span>Sign In
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
