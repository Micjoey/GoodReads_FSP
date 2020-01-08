import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionFormSignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    // if (this.props.formType === 'Sign Up') {
    //   console.log(this.props)
    //   this.props.history.push(`/signup`)
    // } else {
    //   this.props.history.push(`/login`)
    // }
  }

  renderErrors() {
    const errors = this.props.errors.length === 0 ? (<div className="hidden"></div>) : (<ul>
      {this.props.errors.map((error, i) => (
        <li className="login-errors" key={`error-${i}`}>
          {error}
        </li>
      ))}
    </ul>)
    return errors
  }

  render() {
    
    return (
        <div className="sign-up-container">
          <form onSubmit={this.handleSubmit} className="sign-up-box">
            {this.renderErrors()}
            <div className="sign-up">
              <label className="username-field">
                {/* Username: */}
                <input type="text"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.update('username')}
                />
              </label>

            <label className="email-field">
                {/* Username: */}
                <input type="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.update('email')}
                />
            </label> 
            <label className="password-field">
                {/* Password: */}
                <input type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.update('password')}
                />
              </label>
              <input className="session-submit" type="submit" value={this.props.formType} />
            </div>
          </form>
        </div>
    );
  }
}

export default withRouter(SessionFormSignUp);
