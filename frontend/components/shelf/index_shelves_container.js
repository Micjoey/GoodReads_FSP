import { connect } from 'react-redux'
import { retrieveShelves, retrieveShelf, createShelf } from '../../actions/shelf_actions'
import IndexShelves from '../shelf/index_shelves'
import { withRouter } from 'react-router'
import { deleteShelf } from '../../util/shelf_api_util'

const mapStateToProps = (state) => {
    return {
        shelves: Object.values(state.entities.shelf)
    }
}

const mapDispatchToProps = dispatch => ({
    retrieveShelves: () => dispatch(retrieveShelves()),
    createShelf: shelf => dispatch(createShelf(shelf)),
    deleteShelf: shelfId => dispatch(deleteShelf(shelfId))
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IndexShelves)
