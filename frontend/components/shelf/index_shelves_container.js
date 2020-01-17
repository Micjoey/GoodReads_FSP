import { connect } from 'react-redux'
import { retrieveShelves, retrieveShelf, createShelf } from '../../actions/shelf_actions'
import IndexShelves from '../shelf/index_shelves'
import { withRouter } from 'react-router'
import { deleteShelf } from '../../actions/shelf_actions'
import { retrieveBooks } from '../../actions/book_actions'
import { removeOnShelfBook} from '../../actions/on_shelf_book_actions'

const mapStateToProps = (state) => {
    return {
        shelves: Object.values(state.entities.shelf),
        allBooks: Object.values(state.entities.books),
        reviews: Object.values(state.entities.reviews)
    }
}

const mapDispatchToProps = dispatch => ({
    retrieveShelves: () => dispatch(retrieveShelves()),
    createShelf: shelf => dispatch(createShelf(shelf)),
    deleteShelf: shelf => dispatch(deleteShelf(shelf)),
    retrieveBooks: () => dispatch(retrieveBooks()),
    retrieveReviews: () => dispatch(retrieveReviews()),
    removeBook: onShelfBook => dispatch(removeOnShelfBook(onShelfBook)),
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IndexShelves)
