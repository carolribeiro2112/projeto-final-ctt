import {combineReducers} from 'redux'; 
import LoginReducer from './login/reducer';

const createRootReducer = () => combineReducers({
  LoginReducer,
})

export default createRootReducer;