import { call, put } from "redux-saga/effects";

import { postLoginSuccess, postLoginFailure } from './actions';
import LoginService from '../../../services/login-service';
import { AxiosResponse } from "axios";

export function* postUserLogin (action:any) {
  try{
    const response: AxiosResponse = yield call(LoginService.postLogin,action.payload)
    localStorage.setItem('token', response.data.accessToken)

    yield put(postLoginSuccess(response.data))
  } catch(err) {
    yield(postLoginFailure)
  }
}