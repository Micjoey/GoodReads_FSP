import React from 'react';
import { closeModal} from '../../actions/model_actions';
import { connect } from 'react-redux';
import LoggedinFormContainer from '../greeting/logged_in_container';
import SearchBarContainer from '../navbar/search_bar_container';

function Modal({modal, closeModal}) {
    if (!modal) {
        return null;
    }
    let component;
    switch(modal) {
        case 'logout':
            component = <LoggedinFormContainer />;
            break;
        case 'search':
            component = <SearchBarContainer/>;
        default:
            return null;
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                { component }
            </div>  
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);