import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {addToCart} from '../../store/cart/slice.js';
import { removeFromCart } from '../../store/cart/slice.js';
import { updateDisplayList } from '../../store/products/slice.js';

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
      <h2>Products</h2>
      {displayList.map((product, idx) => (
        <Card key={idx} style={{ marginBottom: '16px' }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Price: ${product.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Inventory: {product.inventory}
            </Typography>
            <Button onClick={() => addProductToCart(product)} variant="contained" color="primary">
              Add to Cart
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default Products;
