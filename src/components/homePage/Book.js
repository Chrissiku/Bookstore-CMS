/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable quotes */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as bookId } from "uuid";
import { removeBook } from "../redux/books/books";

const Book = () => {
  const dispatch = useDispatch();
  const BookList = useSelector((state) => state.books.value);
  return (
    <>
      {BookList.map((book) => (
        <div className="book" key={bookId()}>
          <div className="left-book">
            <span className="type">{book.type}</span>
            <h3>{book.title}</h3>
            <span className="author">Chris Cicada</span>
            <ul>
              <li>
                <a>Comments</a>
              </li>
              <button
                type="button"
                onClick={() => {
                  dispatch(removeBook({ id: book.id }));
                }}
              >
                Remove
              </button>
              {/* <li>
                <a>Remove</a>
              </li> */}
              <li>
                <a>Edit</a>
              </li>
            </ul>
          </div>

          <div className="right-book">
            <div className="progress">
              <div className="circle">
                <div className="inner"></div>
              </div>
              <div className="val">
                <span className="completed-val">64%</span>
                <span className="completed">Completed</span>
              </div>
            </div>
            <span className="line"></span>
            <div className="chapter">
              <h4>CURRENT CHAPTER</h4>
              <span>Chapter 17</span>
              <button type="button">UPDATE PROGRESS</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Book;
