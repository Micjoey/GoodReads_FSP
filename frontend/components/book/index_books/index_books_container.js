import { connect } from 'react-redux'
import { retrieveBooks } from '../../../actions/book_actions'
import IndexBook from './index_books'


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
)(IndexBook)
