import * as UserApiUtil from '../util/user_api_util'

export const RECEIVE_ALL_USER = 'RECEIVE_ALL_USER';


export const receiveAllUsers = allUsers => ({
    type: RECEIVE_ALL_USER,
    allUsers
})
export const allUsers = allUsers => dispatch => (
    UserApiUtil.allUsers(allUsers).then(users => (
        dispatch(receiveAllUsers(users))
    ))
);