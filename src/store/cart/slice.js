import {createSlice} from '@reduxjs/toolkit';

const removeFirstInstance = (array, itemToRemove) => {
    const newArray = [];
    // tracker if first instance of itemToRmove is found in array
    let itemFound = false;
    for (let i = 0; i < array.length; i++) {
        // if the current item is the same name as item we want to remove
        if (!itemFound && array[i].name === itemToRemove.name ) {
            itemFound = true;
            // need to add logic here
            
        }else{
            newArray.push(array[i])
        }
    }

    return newArray;
};

const cart = createSlice({
    name: 'cart',
    initialState: {cart: []},

    reducers: {
        addToCart: (state, action) => {
            let cartItem = {...action.payload, inventory:1}
            state.cart = [...state.cart, cartItem]
        },
        removeFromCart: (state, action) => {
            // give helper an array (the copy of the original) and an itemToRemove (an action given by user)
      state.cart = removeFirstInstance(state.cart, action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cart.actions;

export default cart.reducer;


// create a helper function that loops through the array of objects (remove the .filter method) the two paramter array and item to remvoe, then removes the first instance of
// the item you want to delete and nothing after. Return that new array
//create a new array that has one instance of the item we want to delete