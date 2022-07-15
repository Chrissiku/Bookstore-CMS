/* eslint-disable */
import '../css/AddBook.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookThunk, addBook } from '../redux/books/books';
import RandomId from '../helpers/Random';

const basicBookObj = {
  title: '',
  author: '',
  category: 'Science Fiction',
  chapter: 'Chapter 3: "A Lesson Learned"',
};

const AddBook = () => {
  const [inputs, setInputs] = useState(basicBookObj);
  const dispatch = useDispatch();

  const handleInputChange = ({ target }) => {
    const changedInput = { ...inputs, [target.name]: target.value };
    setInputs(changedInput);
  };

  const addBookHandle = (e) => {
    e.preventDefault();
    const item_id = RandomId();

    const { title, author } = inputs;

    if (title !== '' && author !== '') {
      const addedBook = {
        item_id, ...inputs
      };
      dispatch(addBookThunk(addedBook)).then(() => dispatch(addBook(addedBook)));
    }

    setInputs(basicBookObj);
  };

  return (
    <div className="Addbook-form-holder">
      <h2 className="Form-title">ADD NEW BOOK</h2>
      <form className="Add-book-form">
        <input
          className="Form-control Title-add"
          type="text"
          name="title"
          placeholder="Book title"
          autoComplete="off"
          required
          value={inputs.title}
          onChange={handleInputChange}
        />
        <input
          className="Form-control Book-author-input"
          type="text"
          name="author"
          placeholder="Author"
          autoComplete="off"
          required
          value={inputs.author}
          onChange={handleInputChange}
        />
        <button type="submit" className="Button-primary-big" onClick={addBookHandle}>ADD BOOK</button>
      </form>
    </div>
  );
};

export default AddBook;
