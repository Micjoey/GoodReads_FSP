import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal'
import NavBarContainer from './navbar/navbar_container';
import Splash from './splash/splash';
import IndexBookContainer from './book/index_books_container'
import ShowBookContainer from './book/show_book_container';
import IndexShelvesContainer from './shelf/index_shelves_container';
import Footer from './footer/footer';

const App = () => (
  <div className="app">
      <Modal />
    <header className="header">
      <NavBarContainer />
    </header>
    <div className="content">
      <Switch>
        <AuthRoute exact path="/" component={Splash} /> 
        <ProtectedRoute exact path="/home" component={IndexBookContainer} />
        <ProtectedRoute exact path="/book/:bookId" component={ShowBookContainer}/>
        <ProtectedRoute exact path="/shelf" component={IndexShelvesContainer} />
        <Redirect to="/home" />
      </Switch>
      {/* <footer className="footer"> */}
        <Route path='/' component={Footer}/>
      {/* </footer> */}
    </div>
  </div>
);

export default App;














{/* <ProtectedRoute exact path="/benches/new" component={BenchFormContainer} /> */}
{/* <Route path="/benches/:benchId" component={BenchShowContainer} /> */}
{/* <Route exact path="/" component={SearchContainer} /> */}