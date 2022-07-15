const INITIAL_STATE = [];
const UNDER_CONSTRUCTION = 'bookstore/categories/UNDER_CONSTRUCTION';

const categoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UNDER_CONSTRUCTION: return 'Under construction';
    default: return state;
  }
};

export const checkCategoryStatus = () => ({ type: UNDER_CONSTRUCTION });

export default categoryReducer;
