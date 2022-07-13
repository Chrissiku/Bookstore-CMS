/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable quotes */
import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { v4 as bookId } from "uuid";
import { addBook } from "../redux/books/books";

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  return (
    <>
      <div className="separator"></div>
      <div className="add-book">
        <h3>ADD NEW BOOK</h3>
        <form>
          <input
            required
            type="text"
            placeholder="Book title"
            onChange={(event) => setTitle(event.target.value)}
          />
          <select
            name="type"
            required
            onChange={(event) => setType(event.target.value)}
          >
            <option value="Action">Action</option>
            <option value="Science ">Science</option>
            <option value="Fiction ">Fiction</option>
            <option value="Economy">Economy</option>
          </select>
          <button
            type="button"
            onClick={() => {
              dispatch(
                addBook({
                  id: bookId(),
                  title,
                  type,
                }),
              );
            }}
          >
            ADD BOOK
          </button>
        </form>
      </div>
    </>
  );
};

export default AddBook;
