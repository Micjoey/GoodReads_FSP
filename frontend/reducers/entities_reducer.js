import { combineReducers } from 'redux';

import users from './users_reducer';
import UsersReducer from './users_reducer';
import BooksReducer from './books_reducer'
import ShelvesReducer from './shelves_reducer'
import reviewReducer from './review_reducer'

export default combineReducers({
  books: BooksReducer,
  shelf: ShelvesReducer,
  // reviews: reviewReducer,
  users: UsersReducer,
});
