import { put, call } from 'redux-saga/effects';

import UsersService from '../../../services/users-service';
import {AxiosResponse} from 'axios';

import { deleteUsersFailure, deleteUsersSuccess, getUsersFailure, getUsersSuccess, postUsersFailure, postUsersSuccess } from './actions';

export function* getUsers() {
  try{
    const response: AxiosResponse = yield call(UsersService.getUsers);
    yield put(getUsersSuccess(response.data))
  }catch (err){
    console.log(err)
    yield put(getUsersFailure())
  }
}

export function* postUsers(action:any) {
  try{
    yield call(UsersService.postUsers, action.payload);
    yield put(postUsersSuccess())
  } catch (err) {
    console.log(err)
    yield put(postUsersFailure())
  }
}

export function* deleteUsers(action:any) {
  try{
    yield call(UsersService.deleteUsers, action.payload);
    yield put(deleteUsersSuccess())
  } catch (err) {
    console.log(err)
    yield put(deleteUsersFailure())
  }
}