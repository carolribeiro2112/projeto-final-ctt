import { put, call } from 'redux-saga/effects';
import {AxiosResponse} from 'axios';
import UsersService from '../../../services/users-service';
import { getUsersFailure, getUsersSuccess } from './actions';

export function* getUsers() {
  try{
    const response: AxiosResponse = yield call(UsersService.getUsers);
    yield put(getUsersSuccess(response.data))
  }catch (err){
    console.log(err)
    yield put(getUsersFailure())
  }
}
