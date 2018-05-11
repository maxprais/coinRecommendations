import { combineReducers } from 'redux';
import { ShopReducer } from './shop/shop';
import { UserReducer } from './user/user';

export default combineReducers({
  ShopReducer,
  UserReducer
})