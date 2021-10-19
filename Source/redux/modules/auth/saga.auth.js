import {Auth} from 'aws-amplify';
import {call, put, takeLatest} from 'redux-saga/effects';
import * as auth from './constant.auth';

function* Login({payload}) {
  try {
    const email = payload.email;
    const password = payload.password;
    const user = yield Auth.signIn(email, password);
    payload.accessToken = user.signInUserSession.accessToken.jwtToken;
    payload.refreshToken = user.signInUserSession.refreshToken.token;
    payload.userId = user.attributes.sub;
    console.log('Refresh Token =', user.signInUserSession.refreshToken.token);
    console.log(payload);
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
      payload: Response,
    });
    console.log(Response);
  } catch (err) {
    yield put({type: auth.AUTH_ERROR, error: err});
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

export const authsaga = [
  watchmanoflogin(),
  watchmanofsignn(),
  watchmanofsignout(),
];
