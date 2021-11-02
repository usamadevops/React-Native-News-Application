import {all} from 'redux-saga/effects';

import {authsaga} from '../Modules/auth/saga.auth';

export default function* rootSagas() {
  try {
    yield all([...authsaga]);
  } catch (err) {
    return new Error(err);
  }
}
