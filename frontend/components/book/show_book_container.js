import { connect } from 'react-redux'
import { retrieveBook, updateBook } from '../../actions/book_actions'
import ShowBook from './show_book'
import { withRouter } from 'react-router';
import { retrieveAllUsers } from '../../actions/users_actions';

const mapStateToProps = (state, ownProps) => {
    const book = state.entities.books[ownProps.match.params.bookId];
    // const user = state.entities.users[state.session];
    const userId = state.session.id
    const allUsers = state.entities.users
    return ({
        book: book,
        // currentUser: user,
        allUsers: allUsers,
        userId: userId
    })
}

const mapDispatchToProps = dispatch => ({
    retrieveBook: bookId => dispatch(retrieveBook(bookId)),
    retrieveAllUsers: () => dispatch(retrieveAllUsers()),
    updateBook: book => dispatch(updateBook(book))
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowBook))


