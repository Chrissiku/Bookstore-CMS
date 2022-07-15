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
