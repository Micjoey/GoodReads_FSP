import { connect } from 'react-redux'
import { retrieveBooks } from '../../../actions/book_actions'
import IndexBooksMainFile from './Index_books_filter_bar'

const mapStateToProps = (state) => {
    return {
        books: Object.values(state.entities.books)
    }
}

const mapDispatchToProps = dispatch => ({
    retrieveBooks: () => dispatch(retrieveBooks()),
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IndexBooksMainFile)
