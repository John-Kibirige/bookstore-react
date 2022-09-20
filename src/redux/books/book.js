import { v4 as getUniqueId } from 'uuid';

// Actions
const ADD_BOOK = 'bookstore/book/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/book/REMOVE_BOOK';

// Action creators
const addBookActionCreator = (title, author, id) => ({
  type: ADD_BOOK,
  title,
  author,
  id,
});

const removeBookActionCreator = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const initialState = [
  { title: 'title', author: 'author', id: getUniqueId() },
  { title: 'title', author: 'author', id: getUniqueId() },
  { title: 'title', author: 'author', id: getUniqueId() },
];

// Creating the reducer function to handle this
const bookReducer = (state = initialState, action) => {
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
