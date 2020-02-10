import * as ReviewAPIUtil from '../util/review_api_util'
import { RECEIVE_BOOK } from './book_actions'
export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS'
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW'

const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review,
});

const receiveReviews = reviews => ({
    type: RECEIVE_ALL_REVIEWS,
    reviews
})



export const retrieveReviews = () => dispatch => (
    ReviewAPIUtil.retrieveReviews()
        .then(shelves => dispatch(receiveReviews(shelves)))
)

export const retrieveReview = reviewID => dispatch => (
    ReviewAPIUtil.retrieveReview(reviewID)
    .then(review => dispatch(receiveReview(review)))
)

export const createReview = review => dispatch => {
    return (
    ReviewAPIUtil.createReview(review)
    .then( review => dispatch(receiveReviews(review)))
    )
}

export const editReview = review => dispatch => (
    ReviewAPIUtil.editReview(review).then(review => dispatch(receiveReview(review)))
)

