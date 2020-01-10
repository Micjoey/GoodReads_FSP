export const fetchBooks = () => (
    $.ajax({
        method: 'GET',
        url: `/api/books`
    })
)


export const fetchBook = bookId => (
    $.ajax({
        method: 'GET',
        url: `/api/books/${bookId}`
    })
)