const STATUS = 'CHECKED_STATUS';

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case STATUS:
      return 'Under construction';
    default:
      return state;
  }
};

// action creators
const categoriesAction = () => ({
  type: STATUS,
});

export { categoriesAction };
export default categoriesReducer;
