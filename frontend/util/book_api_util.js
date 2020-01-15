export const retrieveBooks = (key, id) => (
    $.ajax({
        method: 'GET',
        url: `/api/books`
    })
)


export const retrieveBook = bookId => (
    $.ajax({
        method: 'GET',
        url: `/api/books/${bookId}`
    })
)

// export const createReview = review => (
//     $.ajax({
//         method: 'POST',
//         url: 'api/reviews',
//         data: {review}
//     })
// )



