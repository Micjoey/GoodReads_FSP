import React from 'react';
import { connect } from 'react-redux';


function Stars({ rating }) {
    if (!rating) {
        return null;
    }
    let component;
    switch (modal) {
        case 'logout':
            break;
        default:
            return null;
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
       
    };
};

const mapDispatchToProps = dispatch => {
    return {
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Stars);