// import { connect } from 'react-redux'
// import { retrieveBook } from '../../actions/book_actions'
// import { withRouter } from 'react-router';
// import { retrieveAllUsers } from '../../actions/users_actions';
// import OnShelfBooks from './onshelfbooks_form'

// const mapStateToProps = (state, ownProps) => {
//     const book = state.entities.books[ownProps.match.params.bookId];
//     const user = state.entities.users[state.session];
//     const allUsers = state.entities.users
//     return ({
//         book: book,
//         currentUser: user,
//         allUsers: allUsers,

//     })
// }

// const mapDispatchToProps = dispatch => ({
//     retrieveBook: bookId => dispatch(retrieveBook(bookId)),
//     retrieveAllUsers: () => dispatch(retrieveAllUsers()),
    
// })

// export default (connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(OnShelfBooks))


