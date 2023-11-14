import { useSelector, useDispatch } from 'react-redux';
import {removeFromCart} from '../../store/cart/slice.js';

function SimpleCart() {
  const cart = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();
  console.log('SimpleCart: cart', cart)

  const removeItem = (item) => {
    dispatch(removeFromCart(item));
  }

  return (
    <div className="simpleCart">
      <h2>Cart (click on item to delete from Cart)</h2>
      {cart.map((item, idx) => (
        <button onClick={() => removeItem(item)} key={idx}>{item.name}</button>
      ))}
    </div>
  );
}

export default SimpleCart;