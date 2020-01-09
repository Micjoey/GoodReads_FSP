import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';

class SessionFormLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
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
    if (this.props.formType === 'Sign Up') {
      this.props.history.push(`/signup`)
    } else {
      this.props.history.push(`/login`)
    }
  }

  handleDemoLogin() {
    this.setState({
      username: "test",
      password: "password"
    }),
      this.props.processForm(this.state).then(() => this.props.history.push('/'))
  }

  renderErrors() {
    if (this.props.errors[0].includes("Invalid")) {
    const errors = (
    <ul>
      {this.props.errors.map((error, i) => (
        <li className="login-errors" key={`error-${i}`}>
          {error}
        </li>
      ))}
    </ul>)
    return errors
    }
  }

  render() {
    return (
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <div className="login-form">
              <label >
                {/* Username: */}
                <input type="text"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="username-field"
                  />
              </label>
            <label>
                {/* Password: */}
                <input type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="password-field"
                  />
              </label>
              <div className="login-buttons">
                <input className="login-form-submit-button" type="submit" value={this.props.formType} />
                <button className="demo-login" onClick={this.handleDemoLogin}>Demo Login</button>
              </div>
              <div className="login-error-message">
                {this.props.errors.length > 0 ? this.renderErrors() : null}
              </div>
            </div>
          </form>
          {/* <div className="background-box">
            <img src={images.fireworks} className="firework" alt="" />
        </div> */}
        
        </div>
    );
  }
}

export default withRouter(SessionFormLogin);
