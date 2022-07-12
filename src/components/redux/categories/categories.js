const CHECK_STATUS = './categories/CHECK_STATUS';

const categoryReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Page Under Construction';
    default:
      return state;
  }
};

export default categoryReducer;
