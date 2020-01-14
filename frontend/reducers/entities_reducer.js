import { combineReducers } from 'redux';

import users from './users_reducer';
import UsersReducer from './users_reducer';
import BooksReduccer from './books_reducer'
import ShelvesReducer from './shelves_reducer'

export default combineReducers({
  books: BooksReduccer,
  shelf: ShelvesReducer,
  // reviews,
  users: UsersReducer
});
