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

const removeBookActionCreator = (title, author, id) => ({
  type: REMOVE_BOOK,
  title,
  author,
  id,
});

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
