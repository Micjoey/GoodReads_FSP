import * as OnShelfAPIUtil from '../util/on_shelf_book_api_util';
import {RECEIVE_ALL_SHELVES, retrieveShelves} from './shelf_actions'
import {RECEIVE_BOOK} from './book_actions'

export const RECEIVE_ON_SHELF_BOOK = 'RECEIVE_ON_SHELF_BOOK'
export const DELETE_ON_SHELF_BOOK = 'DELETE_ON_SHELF_BOOK'

const receiveOnShelfBook = (onShelfBook) => ({
    type: RECEIVE_ON_SHELF_BOOK,
    onShelfBook

})

const deleteOnShelfBook = onShelfBookId => ({
    type: DELETE_ON_SHELF_BOOK,
    onShelfBookId
})

const receiveBook = book => ({
    type: RECEIVE_BOOK,
    book
});

const receiveShelves = shelves => ({
    type: RECEIVE_ALL_SHELVES,
    shelves
})


export const retrieveOnShelfBook = (onShelfBook) => dispatch => (
    OnShelfAPIUtil.retrieveOnShelfBook(onShelfBook)
        .then((book) => dispatch(receiveBook(book)))
)

export const removeOnShelfBook = (onshelfbook) => dispatch => (
    OnShelfAPIUtil.removeOnShelfBook(onshelfbook)
        .then(() => dispatch(retrieveShelves()))
)


