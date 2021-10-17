import { fromJS, Map } from 'immutable';
import {
    SIGN_UP,SIGN_UP_RECIEVED,SIGN_IN,SIGN_IN_RECIEVED,GET_AUTHENTICATION,SIGN_OUT,SIGNOUT_SUCCESS,AUTH_ERROR
} from './constant.auth'


const initialState = fromJS({
	isLoading: false,
	error: Map(),
	data: Map(),
	isAuthenticated: false,
});

const AuthenticationReducer = (state = initialState, action = {}) => {

	const { type, payload, error } = action;
    switch (type) {
        case GET_AUTHENTICATION:
        case SIGN_IN:
            return state.toSet('isLoading', true).toSet('error', Map());
        case SIGN_IN_RECIEVED:
            return state.toSet('isLoading', false).toSet('error', Map()).
                toSet('isAuthenticated', true).toSet('data', fromJS(payload));
        
        case SIGN_UP:
            return state.toSet('isLoading', true).toSet('data', fromJS(payload)).toSet('error', Map());
        case SIGN_UP_RECIEVED:
            return state.toSet('isLoading', false).toSet('isAuthenticated', true).
                toSet('data', fromJS(payload)).toSet('error', Map());
    
        case SIGN_OUT:
            return state.toSet('isLoading', true).toSet('error', Map());
            
        case SIGNOUT_SUCCESS:
           return state.toSet('isLoading', false).toSet('isAuthenticated', false);
           case AUTH_ERROR:
            return state.toSet('isLoading', false).toSet('error', fromJS(error));
        default:
            return state;
        }
    };
    export default AuthenticationReducer;