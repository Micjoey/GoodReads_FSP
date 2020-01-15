import * as ShelfAPIUtil from '../util/shelf_api_util'

export const RECEIVE_ALL_USER = 'RECEIVE_ALL_USER';


export const receiveAllUsers = allUsers => ({
    type: RECEIVE_ALL_USER,
    allUsers
})
export const allUsers = allUsers => dispatch => (
    APIUtil.allUsers(allUsers).then(users => (
        dispatch(receiveAllUsers(users))
    ))
);