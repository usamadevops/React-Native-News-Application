import {combineReducers} from 'redux';
import AuthenticationReducer from '../Modules/auth/reducer.auth';

const RootReducer = combineReducers({
  Auth: AuthenticationReducer,
});
export default RootReducer;
