import {createSlice} from '@reduxjs/toolkit';

const cart = createSlice({
    name: 'cart',
    initialState: {cart: []},

    reducers: {
        addToCart: (state, action) => {
            let cartItem = {...action.payload, inventory:1}
            state.cart = [...state.cart, cartItem]
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => action.payload.name !== item.name)
        }
    }
})
export const { addToCart, removeFromCart } = cart.actions;

export default cart.reducer;