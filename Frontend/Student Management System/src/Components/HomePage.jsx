import "./HomePage.css";
import Navbar from "./Navbar";
import image from "../assets/sms1.jpg"
function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <h1>Student Management System</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
          delectus ad illo a <br/>blanditiis quod ab repellendus dolorem cum
          praesentium provident,  velit nihil beatae voluptas voluptatem
          aspernatur id deleniti. Illum.
        </p>
        <button><span></span>Sign In</button>
      </div>
    </div>
  );
}

export default HomePage;
