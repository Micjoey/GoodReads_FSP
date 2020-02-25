import React from 'react';
import { Link } from 'react-router-dom';
import LoginFormContainer from '../session_form/login_form_container';



class Greeting extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="navbar-view-to-login-or-signup">
        <div className="navbar-view-to-login">
            <Link to="/" className="FunReads-title-logged-in">FunReads</Link>
            <div className='nav-bar-login-form-cont'>
              <LoginFormContainer/>
            </div>
        </div>
    </div>
    )
  }
  
}

export default Greeting;