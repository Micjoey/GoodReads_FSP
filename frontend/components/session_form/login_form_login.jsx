import React from 'react';
import { withRouter } from 'react-router-dom';

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
    // if (this.props.formType === 'Sign Up') {
    //   this.props.history.push(`/signup`)
    // } else {
    //   this.props.history.push(`/login`)
    // }
  }

  handleDemoLogin() {
    this.setState({
      username: "test",
      password: "password"
    }),
      this.props.processForm(this.state).then(() => this.props.history.push('/'))
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {

    return (
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <br />
            {this.renderErrors()}
            <div className="login-form">
              <label className="username-field">
                {/* Username: */}
                <input type="text"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.update('username')}
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
              <button onClick={this.handleDemoLogin}>Demo Login</button>
            </div>
          </form>
        </div>
    );
  }
}

export default withRouter(SessionFormLogin);
