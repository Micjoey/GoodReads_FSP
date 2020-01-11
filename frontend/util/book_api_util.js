export const retrieveBooks = () => (
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