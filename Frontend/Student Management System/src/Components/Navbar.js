import {Component} from "react";
import "./Navbar.css";
import logo from "../assets/sms2.jpg";
import Login from "./Login";

class Navbar extends Component {
    state = {clicked:false};

    handleClick=()=>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){

        return (
            <>
                <nav className= 'nav'>
                    <img className="logo" src={logo} alt="This is a logo" />
                    <div>
                        <ul id="navbar"  className={this.state.clicked ? "#navbar active": "#navbar"}>
                            <li> <a href="index.html">HOME</a></li>
                            <li> <a href="index.html">CONTACT</a></li>
                            <li> <a href="index.html">ABOUT US</a></li>

                        </ul>
                    </div>
                    
                     <div>
                        <ul id="navbarIcon">
                            <li><a href={Login} alt="Profile"><i id="profile" className="far fa-user-circle"></i></a></li>
                        </ul>
                    </div>

                    <div id="mobile" onClick={this.handleClick}>
                        <i id="bar" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                </nav>
               

            </>
    
        );
    }
 
}

export default Navbar