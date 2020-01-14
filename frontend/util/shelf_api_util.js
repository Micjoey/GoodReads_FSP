export const receiveShelf = shelfId => (
    $.ajax({
        method: 'GET',
        url:`/api/shelf/${shelfId}`
    })
)


export const receiveShelves = () => (
    $.ajax({
        method: 'GET',
        url: '/api/shelf'
    })
)


export const createShelf = shelf => (
    $.ajax({
        method: 'POST',
        url: '/api/shelf',
        data: {shelf}
    })
)

