import React from 'react';
import { Link } from 'react-router-dom';
import LoginFormContainer from '../session_form/login_form_container';
import SignUpFormContainer from '../session_form/signup_form_container'



class Splash extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="background-and-signup-box">
                <div className="sign-up-form-box">
                    <p className="sign-up-form-title">New Here? Sign Up Below!</p>
                    <SignUpFormContainer />
                </div>
                <div className="background-box">
                    <img src={images.fireworks2} className="firework" alt="" />
                </div>
                {/* <div className="filler-background-box"></div> */}
            </div>
        )
    }

}


export default Splash;
