import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import GreetingContainer from '../greeting/greeting_container';




class EntryFile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
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
                    Image should be here
                </div>
            </div>
        )
    }
}


export default EntryFile;
