import { configureStore, combineReducers } from '@reduxjs/toolkit';
import productReducer from './products/slice';
import categoryReducer from './categories/slice';

const reducer = combineReducers({
  products: productReducer,
  categories: categoryReducer
});

export default configureStore({ reducer });