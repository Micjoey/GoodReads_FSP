import { RECEIVE_ALL_BOOKS, RECEIVE_BOOK } from "../actions/book_actions";
import { RECEIVE_ON_SHELF_BOOK } from "../actions/on_shelf_book_actions";

const booksReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BOOK:
            return Object.assign({}, {[action.book.id]: action.book})
        case RECEIVE_ALL_BOOKS:
            return Object.assign({}, action.books)
        default:
            return state;
    }
}

export default booksReducer;