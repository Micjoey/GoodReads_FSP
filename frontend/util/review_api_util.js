export const retrieveReviews = () => (
    $.ajax({
        method: 'GET',
        url: '/api/reviews'
    })
)
export const retrieveReview = (reviewId) => (
    $.ajax({
        method: 'GET',
        url: `/api/reviews/${reviewId}`
    })
)

export const createReview = review => (
    $.ajax({
        method: 'POST',
        url: `/api/reviews`,
        data: {review}
    })
)
export const deleteReview = reviewId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/reviews/${reviewId}`,
    })
)

export const editReview = (review) => (
    $.ajax({
        method: 'PATCH',
        url:`/api/reviews/${review.id}`,
        data: {review}
    })
) 

