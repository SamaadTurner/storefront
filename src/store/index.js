import { configureStore, combineReducers } from '@reduxjs/toolkit';
import productReducer from './products/slice';
import categoryReducer from './categories/slice';
import cartReducer from './cart/slice';

const reducer = combineReducers({
  products: productReducer,
  categories: categoryReducer,
  cart: cartReducer
});

export default configureStore({ reducer });