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
                <Link to="/home" className="myreads-title-logged-in">MyReads</Link>
                <Link to="/home" className="nav-bar-home-button">Home</Link>
                <Link to='/Shelf' className="myBooks-link">My Books</Link>
                <button>Placeholder - search bar</button>
                {/* <Link to='/Shelf' className="myBooks-link"></Link> */}
                    <div className="dropdown">
                        <img src={images.account_image} className="dropdown-image-icon" alt="" />
                        <div className="dropdown-content">
                            <disabled className="header-currentuser-name">Hi, {this.props.currentUser.username}!</disabled>
                            <button className="header-button" onClick={this.props.logout}>Log Out</button>
                        </div>
                    </div>
            </div>
            {/* <div className="all-books-sidebar">
                Sidebar
            </div> */}
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
