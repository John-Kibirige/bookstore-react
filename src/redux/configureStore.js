import { configureStore } from '@reduxjs/toolkit';
import booksSlice from './books/book';
import categoriesReducer from './categories/categories';

const store = configureStore({
  reducer: {
    booksReducer: booksSlice.reducer,
    categoriesReducer,
  },
});

export default store;
