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
import Modal from './modal/modal'
import NavBarContainer from './navbar/navbar_container';
import Splash from './splash/splash';
import IndexBookContainer from './book/index_books_container'
import ShowBookContainer from './book/show_book_container';

const App = () => (
  <div className="app">
      <Modal />
    <header className="header">
      <NavBarContainer />
    </header>
    <div className="content">
      <Switch>
        <ProtectedRoute path="/book/:bookId" component={ShowBookContainer}/>
        <AuthRoute exact path="/" component={Splash} /> 
        <ProtectedRoute exact path="/home" component={IndexBookContainer} />
      </Switch>
    </div>
  </div>
);

export default App;














{/* <ProtectedRoute exact path="/benches/new" component={BenchFormContainer} /> */}
{/* <Route path="/benches/:benchId" component={BenchShowContainer} /> */}
{/* <Route exact path="/" component={SearchContainer} /> */}