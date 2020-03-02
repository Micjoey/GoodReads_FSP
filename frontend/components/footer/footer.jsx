import React from 'react';


class Footer extends React.Component {
    render() {
        return (
            <div className="footer-inner">
                <a href="https://www.linkedin.com/in/macallan-savett/" rel="noopener noreferrer" target="_blank" >
                    <img className="footer-linkedin" src={images.linkedin}/>
                </a>
                <a href="https://github.com/Micjoey/FunReads_FSP" rel="noopener noreferrer" target="_blank" >
                    <img src={images.github} className="footer-github" />
                </a>
                <a href="https://macallan.space" id="footerLink" rel="noopener noreferrer" target='_blank'>Macallan Savett</a>
            </div>
        );
    }
};

export default Footer;