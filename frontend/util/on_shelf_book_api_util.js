export const retrieveOnShelfBook = (onShelfBook) => {
    $.ajax({
        method: 'POST',
        url: `/api/on_shelf_books`,
        data: {onShelfBook}
    })
}