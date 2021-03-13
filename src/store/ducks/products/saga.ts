import { put, call } from 'redux-saga/effects';

import {getProductsSuccess,getProductsFailure, postProductsSuccess, postProductsFailure, deleteProductsSuccess, deleteProductsFailure} from './actions';

import ProductsService from '../../../services/products-service';
import {AxiosResponse} from 'axios';

export function* getProducts() {
  try{
    const response: AxiosResponse = yield call(ProductsService.getProducts);
    yield put(getProductsSuccess(response.data))
  } catch (err) {
    console.log(err)
    yield put(getProductsFailure())
  }
}

export function* postProducts(action:any) {
  
  try{
    const response: AxiosResponse = yield call(ProductsService.postProducts, action.payload);
    yield put(postProductsSuccess(response.data))
  } catch (err){
    console.log(err)
    yield put(postProductsFailure())
  }
}

export function* deleteProducts(action:any) {
  try{
    yield call(ProductsService.deleteProducts,action.payload);
    yield put(deleteProductsSuccess())
  } catch(err) {
    console.log(err)
    yield put(deleteProductsFailure())
  }
}