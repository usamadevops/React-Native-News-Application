import { all } from 'redux-saga/effects';

import {
    Authsaga
} from '../modules/auth/saga.auth';
export default function* rootSagas() {
    try {

        yield all(
            [
                ...Authsaga
            ]
        )
    }catch (err)
    {
        return new Error(err);
    }
}