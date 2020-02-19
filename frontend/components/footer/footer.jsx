import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
            <div className="footer-inner">
                <a href="https://www.linkedin.com/in/macallan-savett/">
                    <img className="footer-linkedin" src={images.linkedin} rel="noopener noreferrer" target="_blank" />
                </a>
                <a href="https://github.com/Micjoey/MyReads_FSP/wiki">
                    <img src={images.github} className="footer-github" rel="noopener noreferrer" target="_blank" />
                </a>
                <a href="https://github.com/Micjoey" id="footerLink" rel="noopener noreferrer" target="_blank" >©  Macallan Savett</a>
            </div>

        );
    }
};

export default Footer;