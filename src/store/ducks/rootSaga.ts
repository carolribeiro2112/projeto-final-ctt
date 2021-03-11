import {all, takeLatest} from 'redux-saga/effects';
import { LoginTypes } from './login/types';
import {postUserLogin} from './login/saga';

export default function* rootSaga():any {
  return yield all([
    takeLatest(LoginTypes.POST_LOGIN_REQUEST, postUserLogin),
  ])
}