import { connect } from 'react-redux'
import { retrieveShelves, retrieveShelf, createShelf } from '../../actions/shelf_actions'
import IndexShelves from '../shelf/index_shelves'
import { withRouter } from 'react-router'
import { deleteShelf } from '../../util/shelf_api_util'
import { retrieveBooks } from '../../actions/book_actions'

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
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IndexShelves)
