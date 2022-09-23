import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/3o9S2oBwOumJbhv8h11Y/books';

// Actions
const ADD_BOOK = 'bookstore/book/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/book/REMOVE_BOOK';
const FETCH_BOOK = 'bookstore/book/FETCH_BOOK';

const initialState = {
  books: [],
  status: 'idle',
  error: null
};

// async functions
const addNewBook = createAsyncThunk(ADD_BOOK, async (initialState) => {
  try {
    const response = await axios.post(BASE_URL, initialState);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

const fetchBooks = createAsyncThunk(FETCH_BOOK, async () => {
 try {
    const response = await axios.get(BASE_URL);
  return response.data;
 }catch(err){
    return err.message
 }
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    
  }
})
// Creating the reducer function to handle this
const bookReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          title: action.title,
          author: action.author,
          id: action.id,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((bk) => bk.id !== action.id);
    default:
      return state;
  }
};

export { addBookActionCreator, removeBookActionCreator };
export default bookReducer;
