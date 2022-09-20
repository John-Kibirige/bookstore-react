// Actions
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

// Action creators
const addBookActionCreator = (title, author) => ({
  type: ADD_BOOK,
  title,
  author,
  id,
});

const removeBookActionCreator = (title, author) => ({
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
      return state.map((book) => {
        if (book.id !== action.id) {
          return book;
        }
      });
    default:
      return state;
  }
};

export {addBookActionCreator, removeBookActionCreator};
export default bookReducer;