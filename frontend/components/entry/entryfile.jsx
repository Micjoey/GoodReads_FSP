import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import GreetingContainer from '../greeting/greeting_container';
import SignUpFormContainer from '../session_form/signup_form_container';





class EntryFile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="entryFile">
                <header className="header-link">
                    <Link to="/" className="myreads-title">
                        MyReads
                </Link>
                    <div className="greeting-container">
                        <GreetingContainer />
                    </div>
                </header>
                <div className="background-box">
                    <img src={images.fireworks} className="firework" alt="" />
                    <div className="sign-up-form-box">
                        <p id="new-here">New Here? Sign Up Below!</p>
                        <div className="sign-up-form">

                        <SignUpFormContainer/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default EntryFile;
