/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable quotes */
import React from "react";

const Book = () => (
  <>
    <div className="book">
      <div className="left-book">
        <span className="type">Action</span>
        <h3>The Hunger Games</h3>
        <span className="author">Suzanne Collins</span>
        <ul>
          <li>
            <a>Comments</a>
          </li>
          <li>
            <a>Remove</a>
          </li>
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
  </>
);

export default Book;
