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

export const receiveReview = ({ review, average_rating }) => ({
  type: RECEIVE_REVIEW,
  review,
  average_rating,
});


export const retrieveBooks = () => dispatch => (
  BookAPIUtil.retrieveBooks()
    .then(books => dispatch(receiveAllBooks(books))
));

export const retrieveBook = bookId => dispatch => (
  BookAPIUtil.retrieveBook(bookId)
    .then(book => dispatch(receiveBook(book)))
);

export const createReview = review => dispatch => (
  BookAPIUtil.createReview(review).then(review => (
    dispatch(receiveReview(review))
  ))
)

		