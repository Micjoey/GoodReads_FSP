import { connect } from 'react-redux'
import { retrieveBooks, retrieveBook } from '../../actions/book_actions'
import IndexBook from './index_books'
import { withRouter } from 'react-router'

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
