import { Reducer } from "redux";
import {ProductsTypes,Beers} from './types';

const initialState: Beers = {
  beers: [],
  loading: false,
  error: false
}

const ProductsReducer: Reducer = (state=initialState, action) => {
  switch (action.type) {
    case ProductsTypes.GET_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case ProductsTypes.GET_PRODUCTS_SUCCESS:
      return{
        ...state,
        loading: false,
        beers: action.payload,
        error: false,
      }
    case ProductsTypes.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      }

    case ProductsTypes.POST_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case ProductsTypes.POST_PRODUCTS_SUCCESS:
      return{
        ...state,
        loading: false,
        beers: action.payload,
        error: false,
      }
    case ProductsTypes.POST_PRODUCTS_FAILURE:
      return{
        ...state,
        loading: false,
        error:true
      }
    
    case ProductsTypes.DELETE_PRODUCTS_REQUEST:
      return{
        ...state,
        loading:true
      }
    case ProductsTypes.DELETE_PRODUCTS_SUCCESS:
      return{
        ...state,
        beers: action.payload,
        loading:false,
        error:false,
      }
    case ProductsTypes.DELETE_PRODUCTS_FAILURE:
      return{
        ...state,
        loading:false,
        error:true,
      }
      
    default:
      return state
  }
}

export default ProductsReducer;
