import * as ShelfAPIUtil from '../util/shelf_api_util'

export const RECEIVE_SHELF = 'RECEIVE_SHELF';
export const RECEIVE_ALL_SHELVES = 'RECEIVE_ALL_SHELVES';


const receiveShelf = shelf => ({
    type: RECEIVE_SHELF,
    shelf
})

const receiveShelves = shelves => ({
    type: RECEIVE_ALL_SHELVES,
    shelves
})

export const retrieveShelf = shelfId => dispatch => (
    ShelfAPIUtil.retrieveShelf(shelfId)
        .then(shelf => dispatch(receiveShelf(book)))
)

export const retrieveShelves = () => dispatch => (
    ShelfAPIUtil.retrieveShelves()
        .then(shelves => dispatch(receiveShelves(shelves)))
)

export const createShelf = shelf => dispatch => (
    ShelfAPIUtil.createShelf(shelf).then(shelf => (
        dispatch(receiveShelf(shelf))
    ))
)

export const deleteShelf = () => dispatch => (
    ShelfAPIUtil.deleteShelf().then(shelf => (
        dispatch(deleteShelf(shelf))
    ))
)

