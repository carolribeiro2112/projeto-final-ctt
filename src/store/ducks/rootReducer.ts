import {combineReducers} from 'redux'; 
import LoginReducer from './login/reducer';
import ProductsReducer from './products/reducer';
import UsersReducer from './users/reducer';

const createRootReducer = () => combineReducers({
  LoginReducer,
  ProductsReducer,
  UsersReducer,
})

export default createRootReducer;