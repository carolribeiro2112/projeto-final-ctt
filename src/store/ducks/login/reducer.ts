import { Reducer } from 'redux';
import { LoginTypes } from './types';

const initialState:any = {
  usersArray: [],
  loading: false,
}

const LoginReducer: Reducer = (state=initialState, action) => {

  switch(action.type) {
    case LoginTypes.POST_LOGIN_REQUEST:
      return {
        ...state,
        loading:true,
      }
    
    case LoginTypes.POST_LOGIN_SUCCESS:
      return{
        ...state,
        usersArray: [...state.usersArray, action.payload],
        loading:false,
      }
    
    case LoginTypes.POST_LOGIN_FAILURE:
      return {
        ...state,
        loading:false,
      }
    
      default:
        return state
  }
}

export default LoginReducer;