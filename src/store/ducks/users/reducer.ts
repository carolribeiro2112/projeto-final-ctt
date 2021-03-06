import { Reducer } from "redux";
import { UsersTypes, UserState } from "./types";

const initialState: UserState = {
  users: [],
  loading: false,
}

const UsersReducer: Reducer = (state=initialState, action) => {
  switch (action.type) {
    case UsersTypes.GET_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case UsersTypes.GET_USERS_SUCCESS:
      return{
        ...state,
        loading: false,
        users: action.payload,
      }
    case UsersTypes.GET_USERS_FAILURE:
      return {
        ...state,
        loading: false,
      }
    case UsersTypes.POST_USERS_REQUEST:
      return{
        ...state,
        loading:true,
      }
    case UsersTypes.POST_USERS_SUCCESS:
      return{
        ...state,
        loading: false,
      }
    case UsersTypes.POST_USERS_FAILURE:
      return{
        ...state,
        loading: false,
      }
    
    case UsersTypes.DELETE_USERS_REQUEST:
      return{
        ...state,
        loading: true,
      }
    case UsersTypes.DELETE_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: false
      }

    case UsersTypes.DELETE_USERS_FAILURE:
      return{
        ...state,
        loading:false 
      }
    default:
        return state
    }
  }

  export default UsersReducer;