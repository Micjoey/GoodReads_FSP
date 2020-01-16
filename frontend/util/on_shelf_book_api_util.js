export const retrieveOnShelfBook = (onShelfBook) => {
    $.ajax({
        method: 'POST',
        url: `/api/books/${onShelfBook.book_id}/on_shelf_books`,
        data: {onShelfBook}
    })
}