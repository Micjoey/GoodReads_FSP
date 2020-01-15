import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
            <div className="footer">
                <a href="https://www.linkedin.com/in/macallan-savett/">
                    <img className="footer-linkedin" src={images.linkedin} alt=""/>
                </a>
                <a href="https://github.com/Micjoey/MyReads_FSP/wiki">
                    <img src={images.github} className="footer-github" alt=""/>
                </a>
                <a href="https://github.com/Micjoey" id="footerLink">©  Macallan Savett</a>
            </div>

        );
    }
};

export default Footer;