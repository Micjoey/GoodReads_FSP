import React from 'react';
import { Link } from 'react-router-dom';
import LoginFormContainer from '../session_form/login_form_container';
import personalGreeting from './logged_in';
import LoggedInContainer from './logged_in_container.js';



const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div className="login-fields">
      <LoginFormContainer/>
    </div>
  );

  const personalGreeting = () => (
    <div>
      <LoggedInContainer/>
    </div>

  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
