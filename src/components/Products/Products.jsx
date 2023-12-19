import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import {addToCart} from '../../store/cart/slice.js';
import { updateDisplayList } from '../../store/products/slice.js';
import CustomCard from '../CustomCard/CustomCard.jsx';

function Products() {
  const dispatch = useDispatch();
  const displayList = useSelector((state) => state.products.displayList);
  const activeCategory = useSelector((state) => state.categories.activeCategory);

  const addProductToCart = (product) => {
    dispatch(addToCart(product));
    dispatch(updateDisplayList(activeCategory));
  };

  return ( 
    <div className="products">
      {displayList.map((product, idx) => (
      <CustomCard product={product} key={idx}>
        <Button onClick={() => addProductToCart(product)} variant="contained" color="primary">
          Add to Cart
        </Button>
      </CustomCard>
    ))}
    </div>
  )
}

export default Products;
