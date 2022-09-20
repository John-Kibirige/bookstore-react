import React from 'react';
import Book from './Book';
import CreateNewBook from './CreateNewBook';
import { useSelector } from 'react-redux';

const Books = () => {
  const books = useSelector((state) => state.bookReducer);

  const bookElements = books.map((book) => (
    <Book title={book.title} author={book.author} key={book.id} id={book.id} />
  ));
  return (
    <div className='books-container'>
      <div className='book-elements'>{bookElements}</div>
      <CreateNewBook />
    </div>
  );
};

export default Books;
