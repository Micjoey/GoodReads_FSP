import * as BookAPIUtil from '../util/book_api_util';

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

// need to complete the book api

export const fetchBooks = () => dispatch => (
  BookAPIUtil.fetchBooks()
    .then(books => dispatch(allbooks(books))
));

export const fetchBook = bookId => dispatch => (
  BookAPIUtil.fetchBook(bookId)
    .then(book => dispatch(receiveBook(book)))
);


		