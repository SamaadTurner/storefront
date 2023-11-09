import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {useDispatch, useSelector} from 'react-redux';
import { selectCategory } from '../../store/categories/slice';

function Categories() {
  const dispatch = useDispatch();
  const handleClick  = (category) => {
    dispatch(selectCategory(category));
    console.log({category});
  }
  const categories = useSelector(state => state.categories.list);  

  return (
    <div className="categories">
      <h2>Browse Categories</h2>
      <Stack direction="row" spacing={2}>
      {categories.map((category, idx) => (
        <Button key={idx} variant="text" onClick={() => handleClick(category.name)}> {category.displayName}</Button>
      ))}
      </Stack>
    </div>
  );
}

export default Categories;
