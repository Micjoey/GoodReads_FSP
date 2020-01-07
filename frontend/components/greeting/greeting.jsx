import React from 'react';
import { Link } from 'react-router-dom';
import LoginFormContainer from '../session_form/login_form_container';
import LoggedInContainer from './logged_in_container.js';



const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div className="non-logged-in">
      <header className="login-fields">
        <LoginFormContainer/>
      </header>
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
