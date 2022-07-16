import {Auth} from 'aws-amplify';
import {put, takeLatest} from 'redux-saga/effects';
import * as auth from './constant.auth';
import Session from '../../utils/Session';

function* Login({payload}) {
  try {
    const email = payload.email;
    const password = payload.password;
    const user = yield Auth.signIn(email, password);
    payload.userId = user.attributes.sub;
    console.log('Refresh Token =', user.signInUserSession.refreshToken.token);
    console.log(payload);
    yield Session();
    yield put({
      type: auth.SIGN_IN_RECIEVED,
      payload: payload,
    });
  } catch (err) {
    yield put({
      type: auth.AUTH_ERROR,
      error: err,
    });
  }
}

function* Register({payload}) {
  const username = payload.email;
  const password = payload.password;
  const name = payload.Fullname;
  try {
    const Response = yield Auth.signUp({
      username,
      password,
      attributes: {
        name,
      },
    });
    payload.userId = Response.userSub;
    yield put({
      type: auth.SIGN_UP_RECIEVED,
      payload: payload,
    });

    console.log(Response);
  } catch (err) {
    yield put({type: auth.AUTH_ERROR, error: err});
  }
}
function* ConfirmUserAccount({payload}) {
  const username = payload.username;
  const code = payload.Code;
  try {
    const res = yield Auth.confirmSignUp(username, code);
    yield put({
      type: auth.ACCOUNT_CONFIRMED,
      payload: res,
    });
  } catch (err) {
    yield put({
      type: auth.AUTH_ERROR,
      error: err,
    });
  }
}

function* signoutUser({payload}) {
  try {
    yield Auth.signOut();
    yield put({
      type: auth.SIGN_OUT_SUCCESS,
      payload: payload,
    });
  } catch (err) {
    yield put({
      type: auth.AUTH_ERROR,
      error: err,
    });
  }
}

function* watchmanoflogin() {
  yield takeLatest(auth.SIGN_IN, Login);
}
function* watchmanofsignn() {
  yield takeLatest(auth.SIGN_UP, Register);
}
function* watchmanofsignout() {
  yield takeLatest(auth.SIGN_OUT, signoutUser);
}
function* watchmanofConfirmation() {
  yield takeLatest(auth.CONFIRM_ACCOUNT, ConfirmUserAccount);
}

export const authsaga = [
  watchmanoflogin(),
  watchmanofsignn(),
  watchmanofsignout(),
  watchmanofConfirmation(),
];
