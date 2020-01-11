import { connect } from 'react-redux'
import { retrieveBooks, retrieveBook} from '../../actions/book_actions'
import showBook from './show_books'

const mapStateToProps = ({session, entities: { books }}) => {
    return {
        // currentUser: users[session.id],
        // books: state.entities.books[ownProps.match.params.bookId],
        userId: state.session.id,
        books: state.entities.books[ownProps.match.params.bookId],
        shelf: state.entities.shelf,
        review: state.entities.reviews

    }
}

const mapDispatchToProps = dispatch => ({
    retrieveBooks: () => dispatch(retrieveBooks()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(showBook)
