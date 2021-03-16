import {action} from 'typesafe-actions';
import {ProductsTypes} from './types';

export const getProductsRequest = () => action(ProductsTypes.GET_PRODUCTS_REQUEST);
export const getProductsSuccess = (beers:any) => action(ProductsTypes.GET_PRODUCTS_SUCCESS, beers);
export const getProductsFailure = () => action(ProductsTypes.GET_PRODUCTS_FAILURE);

export const postProductsRequest = (newBeer:any) => action(ProductsTypes.POST_PRODUCTS_REQUEST, newBeer);
export const postProductsSuccess = () => action(ProductsTypes.POST_PRODUCTS_SUCCESS);
export const postProductsFailure = () => action(ProductsTypes.POST_PRODUCTS_FAILURE);

export const deleteProductsRequest = (id:any) => action(ProductsTypes.DELETE_PRODUCTS_REQUEST,id);
export const deleteProductsSuccess = () => action(ProductsTypes.DELETE_PRODUCTS_SUCCESS);
export const deleteProductsFailure = () => action(ProductsTypes.DELETE_PRODUCTS_FAILURE);