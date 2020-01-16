import * as OnShelfAPIUtil from '../util/on_shelf_book_api_util';

export const RECEIVE_ON_SHELF_BOOK = 'RECEIVE_ON_SHELF_BOOK'

const receiveOnShelfBook = (onShelfBook) => ({
    type: RECEIVE_ON_SHELF_BOOK,onShelfBook,
    onShelfBook

})

export const retrieveOnShelfBook = (onShelfBook) => dispatch =>(
    OnShelfAPIUtil.retrieveOnShelfBook(onShelfBook)
        .then((onShelfBook) => dispatch(receiveOnShelfBook(onShelfBook)))
)