import {
    RECEIVE_SHELF,
RECEIVE_ALL_SHELVES 
} from '../actions/shelf_actions'

const shelvesReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_SHELF:
            return Object.assign({}, state, {[action.shelf.id]: action.shelf})
        case RECEIVE_ALL_SHELVES:
            return Object.assign({}, state, action.shelves);
        default:
            return state
    }
}

export default shelvesReducer;