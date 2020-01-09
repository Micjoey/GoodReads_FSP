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
import RootFileContainer from './entry/rootfile_container'
import Modal from './modal/modal'

const App = () => (
  <div className="app">
    <Modal />
    <RootFileContainer />
    <Switch>
      {/* <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} /> */}
      {/* <Route exact path="/" component={RootFileContainer}/> */}
    </Switch>
  </div>
);

export default App;














{/* <ProtectedRoute exact path="/benches/new" component={BenchFormContainer} /> */}
{/* <Route path="/benches/:benchId" component={BenchShowContainer} /> */}
{/* <Route exact path="/" component={SearchContainer} /> */}