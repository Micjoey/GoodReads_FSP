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




    render() {
        // debugger
        console.log(this.props.currentUser)

        const whatever = this.props.currentUser ? (
            <div>
                something
            </div>
        ) : (
            <div>
                not something
            </div>
        )

        return(
            <div className="entryFile">
                <div className="header-bar" id="header-link">
                    <Link to="/" className="myreads-title">MyReads</Link>
                    {whatever}
                    {typeof (currentUser) === 'undefined' ? <LogInFormContainer /> : <LoggedInContainer /> } 
                    {/* { this.props.formType === 'login' ? <LogInFormContainer /> : <LoggedInContainer /> }  */}
                </div>
                <div className="greeting-container">
                    <GreetingContainer />
                </div>
                {/* <div className="background-box">
                        <img src={images.fireworks} className="firework" alt="" />
                        <div className="sign-up-form-box">
                            <div className="sign-up-form">
                                <p className="sign-up-form-title">New Here? Sign Up Below!</p>
                                <SignUpFormContainer/>
                            </div>
                        </div>
                    </div> */}
            </div>
        )
    }
}


export default EntryFile;
