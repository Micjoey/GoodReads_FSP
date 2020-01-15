import { connect } from 'react-redux'
import { retrieveShelves, retrieveShelf, createShelf } from '../../actions/shelf_actions'
import { withRouter } from 'react-router'
import ShelfForm from './shelf_form'

const mapStateToProps = (state) => {
    const user = state.entities.users[state.session];
    return {
        // formType: 'Create Shelf',
        shelves: Object.values(state.entities.shelf),
        currentUser: user,
    }
}

const mapDispatchToProps = dispatch => ({
    createShelf: shelf => dispatch(createShelf(shelf))
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShelfForm)
