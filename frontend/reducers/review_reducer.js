import {RECEIVE_ALL_REVIEWS, RECEIVE_REVIEW} from '../actions/review_actions'

const reviewReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_REVIEWS:
            return Object.assign({}, action.reviews)
        case RECEIVE_REVIEW:
            return Object.assign({}, {[action.review.id]: action.review})
        default:
            return state;
    }
}

export default reviewReducer;