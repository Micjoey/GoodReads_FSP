export const retrieveAllUsers = () => (
    $.ajax({
        method: 'GET',
        url: `/api/users`
    })
)