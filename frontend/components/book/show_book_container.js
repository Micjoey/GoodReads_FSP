import { connect } from 'react-redux'
import { retrieveBook } from '../../actions/book_actions'
import ShowBook from './show_book'
import { withRouter } from 'react-router';
import { allUsers } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
    const book = state.entities.books[ownProps.match.params.bookId];
    const user = state.entities.users[state.session]
    return ({
        book: book,
        currentUser: user
        // currentUser: users[session.id]
    })
}

const mapDispatchToProps = dispatch => ({
    retrieveBook: bookId => dispatch(retrieveBook(bookId)),
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowBook))


