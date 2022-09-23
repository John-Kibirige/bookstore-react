import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/3o9S2oBwOumJbhv8h11Y/books/';

// Actions
const ADD_BOOK = 'bookstore/book/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/book/REMOVE_BOOK';
const FETCH_BOOK = 'bookstore/book/FETCH_BOOK';

const initialState = {
  books: [],
  status: 'idle',
};

// async functions
export const addNewBook = createAsyncThunk(ADD_BOOK, async (initialState) => {
  try {
    const response = await axios.post(BASE_URL, initialState);
    return response.data;
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
    return response.data;
  } catch (err) {
    return err.message;
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchBooks.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        console.log('the action  payload at this point ', action.payload);
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        console.log('the error is ', action.error.message);
      })
      .addCase(addNewBook, fulfilled, (state, action) => {
        (state.status = 'the payload '), action.payload;
      });
  },
});

export default booksSlice.reducer;
