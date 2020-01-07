import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header className="header-link">
      <Link to="/" className="myreads-title">
       MyReads
      </Link>
        <GreetingContainer/>
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      {/* <ProtectedRoute exact path="/benches/new" component={BenchFormContainer} /> */}
      {/* <Route path="/benches/:benchId" component={BenchShowContainer} /> */}
      {/* <Route exact path="/" component={SearchContainer} /> */}
    </Switch>
  </div>
);

export default App;
