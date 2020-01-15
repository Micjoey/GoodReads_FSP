export const retrieveShelf = shelfId => (
    $.ajax({
        method: 'GET',
        url:`/api/shelves/${shelfId}`
    })
)


export const retrieveShelves = () => (
    $.ajax({
        method: 'GET',
        url: `/api/shelves`
    })
)


export const createShelf = shelf => (
    $.ajax({
        method: 'POST',
        url: `/api/shelf`,
        data: {shelf}
    })
)

export const deleteShelf = shelfId => (
    $.ajax({
        method: 'DELETE',
        url: `/api.shelves/${shelfId}`
    })
)

