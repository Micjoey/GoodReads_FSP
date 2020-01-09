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

    }


    personalGreeting() {
        return(
        <div className="header-group">
            <Link to="/" className="myreads-title">MyReads</Link>
                <h2 className="header-currentuser-name">Hi, {this.props.currentUser.username}!</h2>
                <button className="header-button" onClick={() => this.props.openModal('logout')}>yippy yippy</button>
                <button className="header-button" onClick={this.props.logout}>Log Out</button>
                <select className=".dropdown">
                    <option>Hello</option>
                </select>
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

