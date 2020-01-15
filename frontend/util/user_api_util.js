export const receiveAllUsers = () => (
    $.ajax({
        method: 'GET',
        url: `/api/user`
    })
)