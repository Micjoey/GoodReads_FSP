import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import GreetingContainer from '../greeting/greeting_container';
import SignUpFormContainer from '../session_form/signup_form_container';
import LogInFormContainer from '../session_form/login_form_container';
import LoggedInContainer from '../greeting/logged_in_container'
import { openModal } from '../../actions/model_actions';




class RootFile extends React.Component {
    constructor(props) {
        super(props); 
        this.dropDownIdSwitch = this.dropDownIdSwitch.bind(this)
    }

    dropDownIdSwitch() {
        document.getElementById("myDropdown").classList.toggle("show");
    }


    personalGreeting() {
        return(
        <div>
            <div className="header-group-logged-in">
                <Link to="/" className="myreads-title-logged-in">MyReads</Link>
                    <div className="dropdown">
                        <img src={images.account_image} className="dropdown-image-icon" alt="" />
                        <div className="dropdown-content">
                            <disabled className="header-currentuser-name">Hi, {this.props.currentUser.username}!</disabled>
                            <button className="header-button" onClick={this.props.logout}>Log Out</button>
                        </div>
                    </div>
            </div>
        </div>
        )
    }
    
    sessionLinks() {
        return (
            <GreetingContainer/>
            )
        }
        
        render() {
            if (this.props.currentUser) {
                return this.personalGreeting()
            } else {
                return this.sessionLinks()
            }
        }
    }
    
    
    export default RootFile;
    
    
    {/* temp code */}
    {/* <div>
        <h2>Clickable Dropdown</h2>
        <p>Click on the button to open the dropdown menu.</p>

        <div className="dropdown">
                <button onClick={this.dropDownIdSwitch()} className="dropbtn">Dropdown</button>
            <div id="myDropdown" className="dropdown-content">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    </div> */}
    {/* tempcode */}