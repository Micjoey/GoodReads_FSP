import * as UserApiUtil from '../util/user_api_util'

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';


const receiveAllUsers = allUsers => ({
    type: RECEIVE_ALL_USERS,
    allUsers
})

export const retrieveAllUsers = allUsers => dispatch => (
    UserApiUtil.retrieveAllUsers(allUsers).then(users => (
        dispatch(receiveAllUsers(users))
    ))
);