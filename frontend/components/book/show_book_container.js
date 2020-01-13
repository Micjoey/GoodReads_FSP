import { connect } from 'react-redux'
import { retrieveBooks, retrieveBook } from '../../actions/book_actions'
import ShowBook from './show_book'
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
    const book = state.entities.books[ownProps.match.params.bookId];
    return ({
        book: book,
    })
}

const mapDispatchToProps = dispatch => ({
    retrieveBook: bookId => dispatch(retrieveBook(bookId)),
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowBook))


