import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { categoriesAction } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categoriesReducer);

  return (
    <div>
      <button onClick={() => dispatch(categoriesAction())} type='button'>
        Check status
      </button>
      <p>{categories}</p>
    </div>
  );
};

export default Categories;
