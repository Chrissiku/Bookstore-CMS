/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable quotes */
import React from "react";
import Book from "./Book";
import AddBook from "./Add_book";

const BookPage = () => (
  <>
    <Book type="Action" title="The Hunger Games" author="Suzanne Collins" />
    <AddBook />
  </>
);

export default BookPage;
