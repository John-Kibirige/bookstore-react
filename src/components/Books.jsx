import React from 'react';
import { useState } from 'react';
import Book from './Book';

const Books = () => {
  const [books, setBooks] = useState([
    { title: 'just a title', author: 'Some author' },
  ]);
  const bookElements = books.map((book) => (
    <Book title={book.title} author={book.author} key={book.title} />
  ));
  return <div className='book-elements'>{bookElements}</div>;
};

export default Books;
