import {
    SIGN_IN, SIGN_UP,SIGN_OUT, AUTH_ERROR
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

export const authError = (err) => {
    return {
        type: AUTH_ERROR,
        payload:err
    }
}
