import { connect } from 'react-redux'
import { retrieveBooks, retrieveBook } from '../../actions/book_actions'
import ShowBook from './show_book'

const mapStateToProps = (state, ownProps) => {
    const book = state.entities.books[ownProps.match.params.bookId];
    return ({
        book: book,
    })
}

const mapDispatchToProps = dispatch => ({
    retrieveBook: booksId => dispatch(retrieveBook(booksId)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowBook)


