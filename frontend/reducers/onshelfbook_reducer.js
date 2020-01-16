import {RECEIVE_ON_SHELF_BOOK} from '../actions/on_shelf_book_actions'

const onShelfBookReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ON_SHELF_BOOK:
            return Object.assign({}, state, {[action.onShelfBook.id]: action.shelf})
        default:
            return state;
    }
}

export default onShelfBookReducer