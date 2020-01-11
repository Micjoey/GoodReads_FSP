import { connect } from 'react-redux'
import { retrieveBooks, retrieveBook } from '../../actions/book_actions'
import indexBook from './index_book'

const mapStateToProps = (state) => {
    return {
        books: Object.keys(state.entities.books).map(id => state.entities.books[id])
    }
}

const mapDispatchToProps = dispatch => ({
    retrieveBooks: books => dispatch(retrieveBooks(books)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(indexBook)
