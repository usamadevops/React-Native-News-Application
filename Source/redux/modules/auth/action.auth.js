import {
  SIGN_IN,
  SIGN_UP,
  SIGN_OUT,
  AUTH_ERROR,
  SIGN_UP_RECIEVED,
  SIGN_IN_RECIEVED,
} from './constant.auth.js';

export const SignIn = payload => {
  return {
    type: SIGN_IN,
    payload: payload,
  };
};

export const SignUp = payload => {
  return {
    type: SIGN_UP,
    payload: payload,
  };
};
export const recieveSignUp = payload => {
  return {
    type: SIGN_UP_RECIEVED,
    payload: payload,
  };
};

export const SignOut = payload => {
  return {
    type: SIGN_OUT,
    payload: payload,
  };
};

export const authError = err => {
  return {
    type: AUTH_ERROR,
    payload: err,
  };
};
