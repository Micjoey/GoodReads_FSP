import React from 'react';
import { Link } from 'react-router-dom';
import LoginFormContainer from '../session_form/login_form_container';
import LoggedInContainer from './logged_in_container.js';
import SignUpFormContainer from '../session_form/signup_form_container'


const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div className="non-logged-in">
      <header className="login-fields">
        <LoginFormContainer/>
      </header>
      <div className="background-box">
        <img src={images.fireworks} className="firework" alt="" />
        <div className="sign-up-form-box">
          <div className="sign-up-form">
            <p className="sign-up-form-title">New Here? Sign Up Below!</p>
            <SignUpFormContainer />
          </div>
        </div>
      </div>
    </div>
  );

  const personalGreeting = () => (
    <div className="logged-in">
      <LoggedInContainer/>
    </div>

  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
