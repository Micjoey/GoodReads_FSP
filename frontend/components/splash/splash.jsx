import React from 'react';
import SignUpFormContainer from '../session_form/signup_form_container'



class Splash extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        // debugger
        return (
            <div className="background-and-signup-box">
                <div className="sign-up-form-box">
                    <p className="sign-up-form-title">New Here? Sign Up Below!</p>
                    <SignUpFormContainer />
                </div>
                <div className="background-box">
                    {/* <div className="flavor-text"> Track your favorite reads here!</div> */}
                    <img src={images.books} className="background-img" alt="" />
                </div>
            </div>
        )
    }

}


export default Splash;
