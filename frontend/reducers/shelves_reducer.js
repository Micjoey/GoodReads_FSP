import {
    RECEIVE_SHELF,
RECEIVE_ALL_SHELVES, 
REMOVE_SHELF
} from '../actions/shelf_actions'

const shelvesReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_SHELF:
            return Object.assign({}, state, {[action.shelf.id]: action.shelf})
        case RECEIVE_ALL_SHELVES:
            return Object.assign({}, action.shelves);
        case REMOVE_SHELF:
            let next_state = Object.assign({}, state)
            delete next_state[action.shelf.id]
            return next_state
        default:
            return state
    }
}

export default shelvesReducer;