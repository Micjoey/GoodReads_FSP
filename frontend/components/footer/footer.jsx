import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
            <div id="footer">
                <a href="https://www.linkedin.com/in/macallan-savett/">
                    <i className="footer-linkedin"></i>
                </a>
                <a href="https://github.com/Micjoey/MyReads_FSP/wiki">
                    <i className="footer-github"></i>
                </a>
                <a href="https://github.com/Micjoey" id="footerLink">©  Macallan Savett</a>
            </div>

        );
    }
};

export default Footer;