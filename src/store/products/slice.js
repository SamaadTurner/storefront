import { createSlice } from '@reduxjs/toolkit';
import { selectCategory } from '../categories/slice';
import { addToCart } from '../cart/slice';

const products = createSlice({
  name: 'products',
  initialState: {
    displayList: [],
    list:[
      {
        category: 'SHIRTS',
        name: 'T-Shirt',
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
  reducers: {
    updateDisplayList: (state, action) => {
      state.displayList = filterProducts(state.list, action.payload);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(selectCategory, (state, action) => {
      state.displayList = filterProducts(state.list, action.payload);
    })
    builder.addCase(addToCart, (state, action) => {
      // i want to loop through lists [], match product addedtocart to name in list, then reduce inventory when found a match
      const newList = state.list.map((product) => {
        if(product.name === action.payload.name){
          return {...product, inventory: product.inventory - 1}
        }
        return product;
      })
      state.list = newList;
    }) 
  },
});

function filterProducts(list, category) {
  if (category === 'ALL') {
    return list;
  }
  let results = list.filter(product =>
    product.category === category
  )
  console.log(results);
  return results;
}

export const { updateDisplayList } = products.actions;

export default products.reducer;