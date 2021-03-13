import { Reducer } from "redux";
import { UsersTypes } from "./types";

const initialState: any = {
  users: [],
  loading: false,
  error: false
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
        error: false,
      }
    case UsersTypes.GET_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      }
    default:
        return state
    }
  }

  export default UsersReducer;