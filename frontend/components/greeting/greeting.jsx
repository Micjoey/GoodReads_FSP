import React from 'react';
import { Link } from 'react-router-dom';
import LoginFormContainer from '../session_form/login_form_container';



const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    // <nav className="login-signup">
    //   <Link to="/login">Login</Link>
    //   &nbsp;or&nbsp;
    //   <Link to="/signup">Sign up!</Link>
    // </nav>
    <header>
      <LoginFormContainer />
    </header>
   
  );




  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
