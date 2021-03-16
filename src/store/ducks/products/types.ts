export enum ProductsTypes {
  GET_PRODUCTS_REQUEST = '@products/GET_PRODUCTS_REQUEST',
  GET_PRODUCTS_SUCCESS = '@products/GET_PRODUCTS_SUCCESS',
  GET_PRODUCTS_FAILURE = '@products/GET_PRODUCTS_FAILURE',

  POST_PRODUCTS_REQUEST = '@products/POST_PRODUCTS_REQUEST',
  POST_PRODUCTS_SUCCESS = '@products/POST_PRODUCTS_SUCCESS',
  POST_PRODUCTS_FAILURE = '@products/POST_PRODUCTS_FAILURE',

  DELETE_PRODUCTS_REQUEST = '@products/DELETE_PRODUCTS_REQUEST',
  DELETE_PRODUCTS_SUCCESS = '@products/DELETE_PRODUCTS_SUCCESS',
  DELETE_PRODUCTS_FAILURE = '@products/DELETE_PRODUCTS_FAILURE',
}

export interface Products {
  id: number,
  title: string,
  price: string,
  description: string,
  image: string,
  quantity: number,
}

export interface Beers {
  beers: Products[],
  loading: boolean,
}