import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllBooksThunk } from '../redux/books/books';
import RandomId from '../helpers/Random';
import Book from './Book';
import AddBook from './AddBook';

const BookList = () => {
  const dispatch = useDispatch();
  const { loading, books } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getAllBooksThunk());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="Categories">
        <div className="loading">
          <img src={`${process.env.PUBLIC_URL}/loading-bar.gif`} alt="Loading Books" />
        </div>
      </div>
    );
  }

  if (books.length === 0) {
    return (
      <>
        <div className="BookList">
          <h1>No Books Found</h1>
          <h3>Please add a book.</h3>
        </div>
        <AddBook />
      </>
    );
  }

  return (
    <div>
      <ul className="BookList">
        {books.map((book) => (
          <Book
            key={RandomId()}
            id={book.item_id}
            title={book.title}
            author={book.author}
            category={book.category}
            chapter={book.chapter}
          />
        ))}
      </ul>
      <AddBook />
    </div>
  );
};

export default BookList;
