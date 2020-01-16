export const retrieveOnShelfBook = (onshelfbook) => {
    $.ajax({
        method: 'POST',
        url: `/api/on_shelf_books`,
        data: {onshelfbook}
    })
}