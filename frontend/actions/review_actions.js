import * as ReviewAPIUtil from '../util/review_api_util'

export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS'
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW'

const receiveReview = ({ review, average_rating }) => ({
  type: RECEIVE_REVIEW,
  review,
  average_rating,
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

export const createReview = review => dispatch => (
    ReviewAPIUtil.createReview(review).then(review => (
        dispatch(receiveReview(review))
    ))
)

export const editReview = review => dispatch => (
    ReviewAPIUtil.editReview(review).then(review)
)

