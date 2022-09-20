import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/book';
import categoriesReducer from './categories/categories';

const store = configureStore({
  reducer: {
    bookReducer,
    categoriesReducer,
  },
});

export default store;
