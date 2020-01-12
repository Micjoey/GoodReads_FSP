import { connect } from 'react-redux'
import { retrieveBooks, retrieveBook } from '../../actions/book_actions'
import IndexBook from './index_books'

const mapStateToProps = (state) => {
    return {
        books: Object.values(state.entities.books)
    }
}

const mapDispatchToProps = dispatch => ({
    retrieveBooks: books => dispatch(retrieveBooks(books)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IndexBook)
