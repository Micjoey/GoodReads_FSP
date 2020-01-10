import { connect } from 'react-redux'
import { fetchBooks, fetchBook } from '../../actions/book_actions'
import indexBook from './index_book'

const mapStateToProps = (state, ownProps) => {
    return {
        userId: state.session.id,
        books: state.entities.books[ownProps.match.params.bookId],
        shelf: state.entities.shelf,
        review: state.entities.reviews
    }
}

const mapDispatchToProps = dispatch => ({
    fetchBook: () => dispatch(fetchBook()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(indexBook)
