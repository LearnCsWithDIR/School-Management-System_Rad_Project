import {Component} from "react";
import "./Navbar.css";
import logo from "../../assets/sms2.jpg";
import Login from "./Login";
import {Link} from 'react-router-dom';

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
                            <li><Link to="/"> HOME</Link></li>
                            <li> <Link to="/password-reset">CONTACT</Link></li>
                            <li> <Link to="/Admin">ABOUT US</Link></li>

                        </ul>
                    </div>
                    
                     <div>
                        <ul id="navbarIcon">
                            <li><Link to="/login" title="Login"><i id="profile" className="far fa-user-circle"></i></Link></li>
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