import { combineReducers } from 'redux';

import users from './users_reducer';
import UsersReducer from './users_reducer';
import BooksReduccer from './books_reducer'

export default combineReducers({
  books: BooksReduccer,
  // bookshelf,
  // reviews,
  users: UsersReducer
});
