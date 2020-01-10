import * as APIUtil from '../util/session_api_util';

export const RECEIVE_ALL_BOOKS = 'RECEIVE_ALL_BOOKS';
export const RECEIVE_BOOK = 'RECEIVE_BOOK';
// remember to change all variables
const receiveAllBooks = books => ({
  type: RECEIVE_ALL_BOOKS,
  books
});

const receiveBook = book => ({
  type: RECEIVE_BOOK,
  book
});



export const fetchBooks = () => dispatch => (
  PostApiUtil.fetchBooks()
    .then(books => dispatch(receiveAllBooks(books))
));

export const fetchBook = bookId => dispatch => (
  PostApiUtil.fetchBook(bookId)
    .then(book => dispatch(receiveBook(book)))
);

		