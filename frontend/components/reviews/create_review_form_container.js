import { connect } from 'react-redux'
import { retrieveBook } from '../../actions/book_actions'
import { withRouter } from 'react-router';
import { retrieveReview, createReview } from '../../actions/review_actions';
import AddReview from './create_review_form'

const mapStateToProps = (state, ownProps) => {
    const book = state.entities.books[ownProps.match.params.bookId];
    const user = state.entities.users[state.session];
    return ({
        book: book,
        currentUser: user,
    })
}

const mapDispatchToProps = dispatch => ({
    retrieveBook: bookId => dispatch(retrieveBook(bookId)),
    createReview: review => dispatch(createReview(review)),
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(AddReview))


