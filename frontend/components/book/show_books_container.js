import { connect } from 'react-redux'
import { retrieveBooks, retrieveBook } from '../../actions/book_actions'
import ShowBook from './show_books'

const mapStateToProps = (state) => {
    const bookId = props.match.params.bookId
    return {
        bookId: bookId,
        book: Object.values(state.entities.books[bookId])
    }
}

const mapDispatchToProps = dispatch => ({
    retrieveBook: booksId => dispatch(retrieveBook(booksId)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowBook)
