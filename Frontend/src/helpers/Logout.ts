import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// REDUX ACTIONS
import {
    setUserToken,
    setUserProfile,
} from '../redux/actions';

const Logout: any = () => {
    sessionStorage.removeItem('ACCESS_TOKEN');
    sessionStorage.removeItem('PROFILE_USER');
    setUserToken(null);
    setUserProfile(null);

    window.location.href = '/';
}

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators({ setUserToken, setUserProfile }, dispatch);

connect(null, mapDispatchToProps)(Logout);

export default Logout;