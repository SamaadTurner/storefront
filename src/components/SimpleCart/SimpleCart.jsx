import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../store/cart/slice.js';
import { updateDisplayList } from '../../store/products/slice.js';
import CustomCard from '../CustomCard/CustomCard.jsx';

function SimpleCart() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  console.log('SimpleCart: cart', cart);

  const removeItem = (item) => {
    dispatch(removeFromCart(item)); 
    dispatch(updateDisplayList(item.category));
  };

  return (
    <div className="simpleCart">
      <h2>Cart</h2>
      {cart.map((item, idx) => (
        <CustomCard key={idx} product={item} idx={idx}>
          <button onClick={() => removeItem(item)}>Remove from Cart</button>
        </CustomCard>
      ))}
    </div>
  );
}

export default SimpleCart;
