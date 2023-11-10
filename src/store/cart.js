// Define the initial state of the cart, which is an empty array.
const initialState = {
    cart: [],
  };
  
  // Define the cartReducer function, which takes the current state and an action as parameters.
  const cartReducer = (state = initialState, action) => {
    // Use a switch statement to determine the action type.
    switch (action.type) {
      // If the action type is 'ADD_TO_CART':
      case 'ADD_TO_CART':
        // Return a new state object with the existing state and a modified cart array.
        return {
          ...state, // Spread the existing state to avoid mutating it directly.
          cart: [...state.cart, action.payload], // Add the new item to the cart array.
        };
  
      // If the action type is 'REMOVE_FROM_CART':
      case 'REMOVE_FROM_CART':
        // Return a new state object with the existing state and a filtered cart array.
        return {
          ...state, // Spread the existing state to avoid mutating it directly.
          cart: state.cart.filter(item => action.payload.name !== item.name),
          // Filter out the item with the specified name from the cart array.
        };
  
      // If the action type doesn't match any of the above cases:
      default:
        // Return the current state unchanged.
        return state;
    }
  };
  
 export default cartReducer;
  