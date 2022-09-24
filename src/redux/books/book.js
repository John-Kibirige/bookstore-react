/* eslint-disable consistent-return */
import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/3o9S2oBwOumJbhv8h11Y/books/';

// Actions
const ADD_BOOK = 'bookstore/book/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/book/DELETE_BOOK';
const FETCH_BOOK = 'bookstore/book/FETCH_BOOK';

const initialState = {
  books: {},
  status: 'idle',
};

// async functions
export const addNewBook = createAsyncThunk(ADD_BOOK, async (initialState) => {
  try {
    const response = await axios.post(BASE_URL, initialState);
    if (response.data === 'Created') {
      const dataResponse = await axios.get(BASE_URL);
      return dataResponse.data;
    }
  } catch (err) {
    return err.message;
  }
});

export const fetchBooks = createAsyncThunk(FETCH_BOOK, async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

export const deleteBook = createAsyncThunk(REMOVE_BOOK, async (itemId) => {
  try {
    const response = await axios.delete(`${BASE_URL}${itemId}`);
    if (response.data === 'The book was deleted successfully!') {
      const res = await axios.get(BASE_URL);
      return res.data;
    }
  } catch (err) {
    return err.message;
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    bookAdded: (state, action) => ({
      ...state,
      books: {
        ...state.books,
        [action.payload.item_id]: [
          {
            title: action.payload.title,
            category: action.payload.category,
            author: action.payload.author,
          },
        ],
      },
    }),
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBooks.pending, (state) => {
        const st = state;
        st.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        const st = state;
        st.status = 'succeeded';

        st.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        throw new Error('The error is ', action.error);
      })
      .addCase(addNewBook.fulfilled, (state, action) => {
        const st = state;
        st.books = action.payload;
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        const st = state;
        st.books = action.payload;
      });
  },
});

export default booksSlice;
export const { bookAdded } = booksSlice.actions;
