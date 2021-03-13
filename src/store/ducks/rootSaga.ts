import {all, takeLatest} from 'redux-saga/effects';
import { LoginTypes } from './login/types';
import {postUserLogin} from './login/saga';
import { ProductsTypes } from './products/types';
import {deleteProducts, getProducts, postProducts} from './products/saga';
import { UsersTypes } from './users/types';
import { deleteUsers, getUsers, postUsers } from './users/saga';

export default function* rootSaga():any {
  return yield all([
    takeLatest(LoginTypes.POST_LOGIN_REQUEST, postUserLogin),
    
    takeLatest(ProductsTypes.GET_PRODUCTS_REQUEST, getProducts),
    takeLatest(ProductsTypes.POST_PRODUCTS_REQUEST, postProducts),
    takeLatest(ProductsTypes.DELETE_PRODUCTS_REQUEST, deleteProducts),

    takeLatest(UsersTypes.GET_USERS_REQUEST,getUsers),
    takeLatest(UsersTypes.POST_USERS_REQUEST, postUsers),
    takeLatest(UsersTypes.DELETE_USERS_REQUEST, deleteUsers),
  ])
}