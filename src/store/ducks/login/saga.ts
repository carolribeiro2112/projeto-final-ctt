import { call, put } from "redux-saga/effects";
import {decodeToken} from 'react-jwt';

import { postLoginSuccess, postLoginFailure } from './actions';
import LoginService from '../../../services/login-service';
import { AxiosResponse } from "axios";

export function* postUserLogin (action:any) {
  try{
    const response: AxiosResponse = yield call(LoginService.postLogin,action.payload)
    localStorage.setItem('token', response.data.accessToken)
    yield put(postLoginSuccess(response.data))

    const respostaDescriptografada: AxiosResponse = yield decodeToken(response.data.accessToken)
    const {sub} =  yield respostaDescriptografada

    const LoginSub: AxiosResponse = yield call(LoginService.postLoginId,sub)

    yield localStorage.setItem('name', LoginSub.data.name)
    yield localStorage.setItem('email', LoginSub.data.email)
    yield localStorage.setItem('role', LoginSub.data.role)

  } catch(err) {
    yield(postLoginFailure())
  }
}