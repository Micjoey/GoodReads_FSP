import * as OnShelfAPIUtil from '../util/on_shelf_book_api_util';


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



export const retrieveOnShelfBook = (onShelfBook) => dispatch =>(
    OnShelfAPIUtil.retrieveOnShelfBook(onShelfBook)
        .then((book) => dispatch(receiveBook(book)))
)

