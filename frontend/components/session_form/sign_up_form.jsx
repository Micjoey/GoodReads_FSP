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
    this.renderUsernameError = this.renderUsernameError.bind(this);
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
    this.props.history.push(`/`)
  }

  renderErrorsSignUp() {
    if (!this.props.errors[0].includes("Invalid")) {
      const errors = (
        <ul className="login-errors-box">
          {this.props.errors.map((error, i) => (
            <li className="login-errors" key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>)
      return errors
    }
  }

  renderUsernameError() {
    if (!this.props.errors[0].includes("Invalid")) {
      const usernameError = this.props.errors.filter(error => error.includes("Username"))
      const errors = (
        <ul className="login-errors-box">
          {usernameError.map((error, i) => (
            <li className="login-errors" key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>)
      return errors
    }
  }
  renderPasswordError() {
    if (!this.props.errors[0].includes("Invalid")) {
      const usernameError = this.props.errors.filter(error => error.includes("Password"))
      const errors = (
        <ul className="login-errors-box">
          {usernameError.map((error, i) => (
            <li className="login-errors" key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>)
      return errors
    }
  }
  renderEmailError() {
    if (!this.props.errors[0].includes("Invalid")) {
      const usernameError = this.props.errors.filter(error => error.includes("Email"))
      const errors = (
        <ul className="login-errors-box">
          {usernameError.map((error, i) => (
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
        <div className="sign-up-container">
          <form onSubmit={this.handleSubmit} className="sign-up-box">
          {/* {this.props.errors.length > 0 ? this.renderErrorsSignUp() : null} */}
            <div className="sign-up">
              <label className="username-field">
                <input type="text"
                  placeholder="Username"
                  // placeholder={this.props.errors.length > 0 ? "Username can't be blank" : 'Username'}
                  value={this.state.username}
                  onChange={this.update('username')}
                />
              </label>
            {this.props.errors.length > 0 ? this.renderUsernameError() : null}
            <label className="email-field">
                <input type="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.update('email')}
                />
            </label> 
              {this.props.errors.length > 0 ? this.renderEmailError() : null}
            <label className="password-field">
                <input type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.update('password')}
                />
              </label>
              {this.props.errors.length > 0 ? this.renderPasswordError() : null}
              <br/>
              <br/>
              <input className="session-submit" type="submit" value={this.props.formType} />
            </div>
          </form>
        </div>
    );
  }
}

export default withRouter(SessionFormSignUp);
