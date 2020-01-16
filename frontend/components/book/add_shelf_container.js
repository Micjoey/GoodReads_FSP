import { connect } from 'react-redux'
import { retrieveShelves, createShelf } from '../../actions/shelf_actions'
import { retrieveBook } from '../../actions/book_actions'
import AddShelf from './add_shelf'
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
    const book = state.entities.books[ownProps.match.params.bookId];
    const user = state.entities.users[state.session];
    return ({
        book: book,
        shelves: Object.values(state.entities.shelf),
        currentUser: user,
    })
}

const mapDispatchToProps = dispatch => ({
    retrieveBook: bookId => dispatch(retrieveBook(bookId)),
    retrieveShelves: () => dispatch(retrieveShelves()),
    createShelf: shelf => dispatch(createShelf(shelf)),

})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(AddShelf))


