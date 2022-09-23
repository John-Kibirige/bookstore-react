import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/book/booksSlice';
import categoriesReducer from './categories/categories';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categoriesReducer,
  },
});

export default store;
