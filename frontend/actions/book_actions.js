import * as BookAPIUtil from '../util/book_api_util';

export const RECEIVE_ALL_BOOKS = 'RECEIVE_ALL_BOOKS';
export const RECEIVE_BOOK = 'RECEIVE_BOOK';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

const receiveAllBooks = books => ({
  type: RECEIVE_ALL_BOOKS,
  books
});

const receiveBook = book => ({
  type: RECEIVE_BOOK,
  book
});





export const retrieveBooks = () => dispatch => (
  BookAPIUtil.retrieveBooks()
    .then(books => dispatch(receiveAllBooks(books))
));

export const retrieveBook = bookId => dispatch => (
  BookAPIUtil.retrieveBook(bookId)
    .then(book => dispatch(receiveBook(book)))
);

export const updateBook = book => dispatch => (
  BookAPIUtil.updateBook(book)
    .then(book => dispatch(retrieveBooks(book)))
)



		