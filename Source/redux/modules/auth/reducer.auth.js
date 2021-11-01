import {fromJS, Map} from 'immutable';
import {
  SIGN_UP,
  SIGN_UP_RECIEVED,
  SIGN_IN,
  SIGN_IN_RECIEVED,
  GET_AUTHENTICATION,
  SIGN_OUT,
  SIGNOUT_SUCCESS,
  AUTH_ERROR,
} from './constant.auth';

const initialState = fromJS({
  isLoading: false,
  error: Map(),
  data: Map(),
  isAuthenticated: false,
});

const AuthenticationReducer = (state = initialState, action = {}) => {
  const {type, payload, error} = action;
  switch (type) {
    case SIGN_IN:
      return state.set('isLoading', true).set('error', Map());

    case SIGN_IN_RECIEVED: {
      return state
        .set('isLoading', false)
        .set('error', Map())
        .set('isAuthenticated', true)
        .set('data', fromJS(payload));
    }
    case SIGN_UP:
      return state
        .set('isLoading', true)
        .set('data', fromJS(payload))
        .set('error', Map());

    case SIGN_UP_RECIEVED: {
      return state
        .set('isLoading', false)
        .set('isAuthenticated', true)
        .set('data', fromJS(payload))
        .set('error', Map());
    }

    case SIGN_OUT:
      return state.set('isLoading', true).set('error', Map());

    case SIGNOUT_SUCCESS:
      return state.set('isLoading', false).set('isAuthenticated', false);
    case AUTH_ERROR:
      return state.set('isLoading', false).set('error', fromJS(error));
    default:
      return state;
  }
};
export default AuthenticationReducer;
