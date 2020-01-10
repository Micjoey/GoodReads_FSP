import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Splash from './splash'


const mapStateToProps = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Splash);