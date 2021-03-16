import {action} from 'typesafe-actions';
import { LoginTypes } from './types';

export const postLoginRequest = (login:any) => action(LoginTypes.POST_LOGIN_REQUEST, login)
export const postLoginSuccess = (id:number) => action(LoginTypes.POST_LOGIN_SUCCESS, id)
export const postLoginFailure = () => action(LoginTypes.POST_LOGIN_FAILURE)