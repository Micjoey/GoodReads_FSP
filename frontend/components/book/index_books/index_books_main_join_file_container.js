import { connect } from 'react-redux'
import { retrieveBooks, retrieveBook } from '../../../actions/book_actions'
import IndexBooksMainJoinFile from './index_books_main_join_file'

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
)(IndexBooksMainJoinFile)
