import { createSlice } from '@reduxjs/toolkit';
import { selectCategory } from '../categories/slice';

const products = createSlice({
  name: 'products',
  initialState: {
    displayList: [],
    list:[
      {
        category: 'SHIRTS',
        name: 'T-Shirt 1',
        description: 'An athletic shirt!',
        price: 20,
        inventory: 10,
      },
      {
        category: 'SHOES',
        name: 'Running Shoes',
        description: 'Shoes for running!',
        price: 100,
        inventory: 5,
      },
      {
        category: 'PANTS',
        name: 'Athletic Pants',
        description: 'Pants for walking!',
        price: 50,
        inventory: 25,
      }
    ],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(selectCategory, (state, action) => {
      console.log("Producct", action);
      state.displayList = filterProducts(state, action.payload);
    })
  },
});
function filterProducts(state, payload) {
  if (payload === 'ALL') {
    return state.list;
  }
  let results = state.list.filter(product =>
    product.category === payload
  )
  console.log(results);
  return results;
}
//export const { selectProduct } = products.actions;

export default products.reducer;