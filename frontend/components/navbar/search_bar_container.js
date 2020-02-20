import { connect } from 'react-redux';
import SearchBar from './search_bar'
import { openModal } from '../../actions/model_actions';
import { retrieveBooks, retrieveBook } from '../../actions/book_actions'
import { withRouter } from 'react-router';


const mapStateToProps = ({ entities: { books } }) => {
    // const bookId = state.entities.books[ownProps.match.params.bookId]
    return {
        books: Object.values(books),
        // bookId: bookId
    };
};

const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    retrieveBooks: () => dispatch(retrieveBooks()),
    retrieveBook: bookId => dispatch(retrieveBook(bookId))
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar));
