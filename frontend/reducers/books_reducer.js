import { RECEIVE_ALL_BOOKS, RECEIVE_BOOK, RECEIVE_REVIEW } from "../actions/book_actions";

const booksReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BOOK:
            return Object.assign({}, state, {[action.book.id]: action.book})
        case RECEIVE_ALL_BOOKS:
            return Object.assign({}, state, action.books)
        // case RECEIVE_REVIEW:
        //     return Object.assign({}, state, action.review)
        default:
            return state;
    }
}

export default booksReducer;