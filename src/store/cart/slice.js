import { createSlice } from '@reduxjs/toolkit';

const removeFirstInstance = (array, itemToRemove) => {
  const newArray = [];
  // tracker if first instance of itemToRemove is found in array
  let itemFound = false;
  for (let i = 0; i < array.length; i++) {
    // if the current item is the same name as item we want to remove
    if (!itemFound && array[i].name === itemToRemove.name) {
      itemFound = true;
      // need to add logic here
    } else {
      newArray.push(array[i]);
    }
  }

  return newArray;
};

const cart = createSlice({
  name: 'cart',
  initialState: { cart: [] },

  reducers: {
    addToCart: (state, action) => {
      let cartItem = { ...action.payload, inventory: 1 };
      state.cart = [...state.cart, cartItem];
    },
    removeFromCart: (state, action) => {
      // give helper an array (the copy of the original) and an itemToRemove (an action given by user)
      state.cart = removeFirstInstance(state.cart, action.payload);
    },
    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
    // update the cart by going over each item and checking if the current item's id matchs the productId from the payload
      state.cart = state.cart.map((item) =>
        item.id === productId 
        ? { 
            // If it matches, create a new object with all existing item properties
            ...item, 
            // update the inventory property with the new quantity
            inventory: quantity,
        } 
        : item // If Id doesnt match, leave item alone
      );
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cart.actions;

export default cart.reducer;
