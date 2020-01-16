export const retrieveOnShelfBook = (onshelfbook) => {
    $.ajax({
        method: 'POST',
        url: `/api/books/${onshelfbook.book_id}/on_shelf_books`,
        data: {onshelfbook}
    })
}