import React from 'react';
import { Link } from 'react-router-dom';


const LoggedIn = ({ currentUser, logout}) => {
        return(
        <params className="header-group">
            {/* <h2 className="header-name">Hi, {currentUser.username}!</h2> */}
            <button className="header-button" onClick={logout}>Log Out</button>
        </params>
        )
};

export default LoggedIn;