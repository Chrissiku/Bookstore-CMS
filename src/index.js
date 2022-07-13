/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { BooksSlice } from "./components/redux/books/books";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const BooksStore = configureStore({
  reducer: {
    books: BooksSlice.reducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={BooksStore}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
