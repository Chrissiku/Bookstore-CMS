/* eslint-disable quotes */
import React from "react";
import { Routes, Route } from "react-router-dom";
// import HomePage from "./components/homePage/Home";
import NavBar from "./components/navbar";
import BookPage from "./components/homePage/BookPage";
import Category from "./components/CategoryPage/category";
import "./App.css";

const App = () => (
  <>
    <div className="container">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<BookPage />} />
          <Route path="Category" element={<Category />} />
          <Route />
        </Routes>
      </main>
    </div>
  </>
);

export default App;
