import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'; // remove this line of code for production

import rootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    // applyMiddleware(thunk) 
    applyMiddleware(thunk, logger) // remove this line of code for production
  )
);

export default configureStore;
