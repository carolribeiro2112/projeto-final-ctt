import {action} from 'typesafe-actions';
import {UsersTypes} from './types';

export const getUsersRequest = () => action(UsersTypes.GET_USERS_REQUEST);
export const getUsersSuccess = (users:any) => action(UsersTypes.GET_USERS_SUCCESS, users);
export const getUsersFailure = () => action(UsersTypes.GET_USERS_FAILURE);