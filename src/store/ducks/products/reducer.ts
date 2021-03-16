import { Reducer } from "redux";
import {ProductsTypes,Beers} from './types';

const initialState: Beers = {
  beers: [],
  loading: false,
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
      }
    case ProductsTypes.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
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
      }
    case ProductsTypes.POST_PRODUCTS_FAILURE:
      return{
        ...state,
        loading: false,
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
      }
    case ProductsTypes.DELETE_PRODUCTS_FAILURE:
      return{
        ...state,
        loading:false,
      }
      
    default:
      return state
  }
}

export default ProductsReducer;
