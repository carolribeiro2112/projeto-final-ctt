import {action} from 'typesafe-actions';
import {Users, UsersTypes} from './types';

export const getUsersRequest = () => action(UsersTypes.GET_USERS_REQUEST);
export const getUsersSuccess = (users:Users ) => action(UsersTypes.GET_USERS_SUCCESS, users);
export const getUsersFailure = () => action(UsersTypes.GET_USERS_FAILURE);

export const postUsersRequest = (newUser:Users) => action(UsersTypes.POST_USERS_REQUEST, newUser);
export const postUsersSuccess = () => action(UsersTypes.POST_USERS_SUCCESS);
export const postUsersFailure = () => action(UsersTypes.POST_USERS_FAILURE);

export const deleteUsersRequest = (id:number) => action(UsersTypes.DELETE_USERS_REQUEST, id);
export const deleteUsersSuccess = () => action(UsersTypes.DELETE_USERS_SUCCESS);
export const deleteUsersFailure = () => action(UsersTypes.DELETE_USERS_FAILURE);
