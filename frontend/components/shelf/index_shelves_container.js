import { connect } from 'react-redux'
import { retrieveShelves, retrieveShelf } from '../../actions/shelf_actions'
import IndexShelves from '../shelf/index_shelves'
import { withRouter } from 'react-router'

const mapStateToProps = (state) => {
    return {
        shelves: Object.values(state.entities.shelf)
    }
}

const mapDispatchToProps = dispatch => ({
    retrieveShelves: () => dispatch(retrieveShelves()),
    
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IndexShelves)
