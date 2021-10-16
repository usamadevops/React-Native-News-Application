import {
    SIGN_IN, SIGN_UP, GET_AUTHENTICATION,SIGN_OUT
} from './constant.auth.js';

export const SignIn = (payload) => {
    return {
        type: SIGN_IN,
        payload: payload
    }
};

export const SignUp = (payload) => {
    return {
        type: SIGN_UP,
        payload: payload
    }
};

export const SignOut = (payload) => {
    return {
        type: SIGN_OUT,
        payload: payload
    }
};
