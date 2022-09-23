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
};

// async function for adding a new book
const addNewPost = createAsyncThunk(ADD_BOOK, async (initialState) => {
  try {
    const response = await axios.post(BASE_URL, initialState);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

// Action creators
// const addBookActionCreator = (title, author, id) => ({
//   type: ADD_BOOK,
//   title,
//   author,
//   id,
// });

// const removeBookActionCreator = (id) => ({
//   type: REMOVE_BOOK,
//   id,
// });

// const initialState = [
//   { title: 'title', author: 'author', id: getUniqueId() },
//   { title: 'title', author: 'author', id: getUniqueId() },
//   { title: 'title', author: 'author', id: getUniqueId() },
// ];

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
