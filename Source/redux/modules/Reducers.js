import {combineReducers} from 'redux';
import AuthenticationReducer from '../modules/auth/reducer.auth';

const RootReducer = combineReducers({
  Auth: AuthenticationReducer,
});
export default RootReducer;
