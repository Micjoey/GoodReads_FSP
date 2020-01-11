import * as BookAPIUtil from '../util/book_api_util';

export const RECEIVE_ALL_BOOKS = 'RECEIVE_ALL_BOOKS';
export const RECEIVE_BOOK = 'RECEIVE_BOOK';

const receiveAllBooks = books => ({
  type: RECEIVE_ALL_BOOKS,
  books
});

const receiveBook = book => ({
  type: RECEIVE_BOOK,
  book
});



export const retrieveBooks = () => dispatch => (
  BookApiUtil.retrieveBooks()
    .then(books => dispatch(receiveAllBooks(books))
));

export const retrieveBook = bookId => dispatch => (
  BookApiUtil.retrieveBook(bookId)
    .then(book => dispatch(receiveBook(book)))
);


		