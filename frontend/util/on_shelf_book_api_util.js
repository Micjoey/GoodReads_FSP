export const retrieveOnShelfBook = (onshelfbook) => (
    $.ajax({
        method: 'POST',
        url: '/api/on_shelf_books',
        data: {onshelfbook}
    })
)

export const removeOnShelfBook = (onshelfbook) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/on_shelf_books/${onshelfbook.id}`,
        // data: {onshelfbook}
    })
)