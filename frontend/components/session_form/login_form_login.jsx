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
    this.props.history.push(`/`)
  }

  handleDemoLogin() {
      this.props.processForm({
        username: "Lord Fitzgerald",
        password: "password"
      }).then(() => this.props.history.push('/'))
  }

  renderErrors() {
    if ((this.props.errors[0].includes("Invalid")) || (this.props.errors[0].includes("Woops"))) {
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
              {/* <div className="login-buttons"> */}
                <input className="login-form-submit-button" type="submit" value={this.props.formType} />
              {/* </div> */}
            </div>
          </form>
          <button className="demo-login" onClick={this.handleDemoLogin}>Demo Login</button>
        {this.props.errors.length > 0 ? this.renderErrors() : null}
        </div>
    );  
  }
}

export default withRouter(SessionFormLogin);
