/* eslint-disable */
import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
import INITIAL_STATE from './initialData';

import fetchBookURL from '../../API/BookAPI';

export const getAllBooksThunk = createAsyncThunk('books/getBooks', async () => {
  const res = await fetch(fetchBookURL);
  return res.json();
});

export const addBookThunk = createAsyncThunk('books/addBook', async (book) => {
  const res = await fetch(fetchBookURL, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res.json();
});

export const removeBookThunk = createAsyncThunk('books/removeBook', async (bookId) => {
  const res = await fetch(`${fetchBookURL}/${bookId}`,{
    method: 'DELETE',
  });
  return res.json();
});

const booksSlice = createSlice({
  name: 'books',
  initialState: INITIAL_STATE,
  reducers: {
    addBook: (state, action) => {
      const newBooksArr = [ ...current(state).books, action.payload ];
      state.books = newBooksArr;
      state.loading = false;
    },
    removeBook: (state, action) => {
      const afterDeleteBooks = current(state).books.filter(({ item_id }) => item_id !== action.payload);
      state.books = afterDeleteBooks;
      state.loading = false;
    },
  },
  extraReducers: {
    [getAllBooksThunk.fulfilled]: (state, action) => {
      const books = Object.keys(action.payload).map((key) => ({
        ...action.payload[key][0],
        item_id: key,
        chapter: "Chapter 3",
      }));

      state.loading = false;
      state.books = books;
    },
    [getAllBooksThunk.pending]: (state) => { state.loading = true; },
    [getAllBooksThunk.rejected]: (state) => { state.loading = false; },
    [addBookThunk.pending]: (state) => { state.loading = true; },
    [removeBookThunk.pending]: (state) => { state.loading = true; },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
