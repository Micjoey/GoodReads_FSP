import * as OnShelfAPIUtil from '../util/on_shelf_book_util'

export const RECEIVE_SHELF = 'RECEIVE_SHELF'

const receiveOnShelfBook = (onshelfbook) => ({
    type: RECEIVE_SHELF,
    onshelfbook

})

export const retrieveOnShelfBook = (onshelfbook) => dispatch =>(
    OnShelfAPIUtil.receiveOnShelfBook(onshelfbook)
        .then((onshelfbook) => dispatch(receiveOnShelfBook(onshelfbook)))
)