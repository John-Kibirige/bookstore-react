import React from 'react';
import { useState } from 'react';
import Book from './Book';
import CreateNewBook from './CreateNewBook';

const Books = () => {
  const [books, setBooks] = useState([
    { title: 'title', author: 'author' },
    { title: 'title', author: 'author' },
    { title: 'title', author: 'author' },
  ]);
  const bookElements = books.map((book) => (
    <Book title={book.title} author={book.author} key={book.title} />
  ));
  return (
    <div className='books-container'>
      <div className='book-elements'>{bookElements}</div>
      <CreateNewBook />
    </div>
  );
};

export default Books;
