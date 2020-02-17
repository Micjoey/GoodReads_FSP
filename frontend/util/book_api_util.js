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

export const updateBook = book => (
    $.ajax({
        method: 'PATCH',
        url: `/api/books/${book.id}`,
        data: {book}
    })
)





