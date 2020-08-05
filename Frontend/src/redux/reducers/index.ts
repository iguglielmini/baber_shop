import { combineReducers } from 'redux';
import { userLoginReduce } from './userLoginReduce';

const rootReducers = combineReducers({
    userLoginState: userLoginReduce,
});

export default rootReducers;
