import React from 'react';


class Footer extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
            <div className="footer-inner">
                <a href="https://www.linkedin.com/in/macallan-savett/" target="_blank" >
                    <img className="footer-linkedin" src={images.linkedin} rel="noopener noreferrer" />
                </a>
                <a href="https://github.com/Micjoey/MyReads_FSP/wiki" target="_blank" >
                    <img src={images.github} className="footer-github" rel="noopener noreferrer" />
                </a>
                <a href="https://github.com/Micjoey" id="footerLink" rel="noopener noreferrer" target='_blank'>©  Macallan Savett</a>
            </div>

        );
    }
};

export default Footer;