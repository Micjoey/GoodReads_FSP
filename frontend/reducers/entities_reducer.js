import { combineReducers } from 'redux';

import UsersReducer from './users_reducer';
import BooksReducer from './books_reducer'
import ShelvesReducer from './shelves_reducer'
import reviewReducer from './review_reducer'
import onShelfBookReducer from './onshelfbook_reducer'

export default combineReducers({
  books: BooksReducer,
  shelf: ShelvesReducer,
  reviews: reviewReducer,
  users: UsersReducer,
  onShelfBook: onShelfBookReducer,
});
