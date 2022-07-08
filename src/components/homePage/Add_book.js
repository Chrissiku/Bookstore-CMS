/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable quotes */
import React from "react";

const AddBook = () => (
  <>
    <div className="separator"></div>
    <div className="add-book">
      <h3>ADD NEW BOOK</h3>
      <form>
        <input required type="text" placeholder="Book title" />
        <select required>
          <option>Action</option>
          <option>Science Fiction</option>
          <option>Economy</option>
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  </>
);

export default AddBook;
