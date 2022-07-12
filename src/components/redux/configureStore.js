import {
  applyMiddleware,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import bookReducer from './books/books';
import categoryReducer from './categories/categories';

const rootReducer = combineReducers({
  reducer: {
    book: bookReducer,
    category: categoryReducer,
  },
});

const store = configureStore(rootReducer, applyMiddleware(thunk));

export default store;
