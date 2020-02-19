import * as ShelfAPIUtil from '../util/shelf_api_util'

export const RECEIVE_SHELF = 'RECEIVE_SHELF';
export const RECEIVE_ALL_SHELVES = 'RECEIVE_ALL_SHELVES';
export const REMOVE_SHELF = 'REMOVE_SHELF'
export const ADD_SHELF = 'ADD_SHELF'


const receiveShelf = shelf => ({
    type: RECEIVE_SHELF,
    shelf
})

const receiveShelves = shelves => ({
    type: RECEIVE_ALL_SHELVES,
    shelves
})

const removeShelf = (shelf) => ({
    type: REMOVE_SHELF,
    shelf
})




export const retrieveShelf = shelfId => dispatch => (
    ShelfAPIUtil.retrieveShelf(shelfId)
        .then(shelf => dispatch(receiveShelf(shelf)))
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

export const deleteShelf = shelfId => dispatch => (
    ShelfAPIUtil.deleteShelf(shelfId)
    .then((shelfId) => (dispatch(removeShelf(shelfId)))
    .then(() => dispatch(retrieveShelves()))
    )
)

