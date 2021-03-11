import {action} from 'typesafe-actions';
import { LoginTypes } from './types';

export const postLoginRequest = (login:any) => action(LoginTypes.POST_LOGIN_REQUEST, login)
export const postLoginSuccess = (loginUsers:any) => action(LoginTypes.POST_LOGIN_SUCCESS, loginUsers)
export const postLoginFailure = () => action(LoginTypes.POST_LOGIN_FAILURE)