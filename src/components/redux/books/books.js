// const initialState = [];
// const bookId = Math.floor(Math.random() * 1000);

// const ADD_BOOK_ACTION = "ADD_BOOK_ACTION";
// const REMOVE_BOOK_ACTION = "REMOVE_BOOK_ACTION";

// const bookReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_BOOK_ACTION: {
//       const newState = {
//         id: bookId,
//         title: action.book.title,
//         author: action.book.author,
//         category: action.book.category,
//       };
//       return [...state, newState];
//     }
//     case REMOVE_BOOK_ACTION: {
//       const remove = state.filter((book) => book[0] !== action.id);
//       return remove;
//     }
//     default:
//       return state;
//   }
// };

// export const addBook = (book) => ({
//   type: ADD_BOOK_ACTION,
//   book,
// });

// export const removeBook = (id) => ({
//   type: REMOVE_BOOK_ACTION,
//   id,
// });

// export default bookReducer;

/* eslint-disable quotes */
/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import initialState from "./InitialState";

export const BooksSlice = createSlice({
  name: "books",
  initialState: { value: initialState },
  reducers: {
    addBook: (state, action) => {
      state.value.push(action.payload);
    },
    removeBook: (state, action) => {
      state.value = state.value.filter((book) => book.id !== action.payload.id);
    },
  },
});

export const { addBook, removeBook } = BooksSlice.actions;
export default BooksSlice;
