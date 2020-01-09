import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import GreetingContainer from '../greeting/greeting_container';
import SignUpFormContainer from '../session_form/signup_form_container';
import LogInFormContainer from '../session_form/login_form_container';
import LoggedInContainer from '../greeting/logged_in_container'




class EntryFile extends React.Component {
    constructor(props) {
        super(props); 

    }



    personalGreeting() {
        return(
        <div className="header-group">
            <Link to="/" className="myreads-title">MyReads</Link>
                <h2 className="header-name">Hi, {this.props.currentUser.username}!</h2>
            <button className="header-button" onClick={this.props.logout}>Log Out</button>
        </div>
        )
    }

    sessionLinks() {
        return (
            <GreetingContainer/>
        )
    }

    render() {
        // debugger
            if (this.props.currentUser) {
                return this.personalGreeting()
            } else {
                return this.sessionLinks()
            }
            // <div className="entryFile">
            //     <div className="header-bar" id="header-link">
            //       
            //         {this.props.currentUser ? <LoggedInContainer /> : <GreetingContainer /> } 
            //     </div>
            // </div>
    }
}


export default EntryFile;

{/* <div className="greeting-container">
<GreetingContainer />
</div> */}
{/* <div className="background-box">
<img src={images.fireworks} className="firework" alt="" />
<div className="sign-up-form-box">
<div className="sign-up-form">
<p className="sign-up-form-title">New Here? Sign Up Below!</p>
<SignUpFormContainer/>
</div>
</div>
</div> */}
{/* { typeof(this.props.currentUser === 'undefined') ? <LogInFormContainer /> : <LoggedInContainer />} */}
{/* {this.props.currentUser ? <LogInFormContainer /> : <LoggedInContainer /> }  */}