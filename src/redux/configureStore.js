import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/book';
import categoriesReducer from './categories/categories';

export default configureStore({
  reducer: {
    bookReducer,
    categoriesReducer,
  },
});
