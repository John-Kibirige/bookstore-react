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
  return (
    <div className='books-container'>
      <div className='book-elements'>{bookElements}</div>
      <form action='#'>
        <h3>Add new book</h3>
        <input type='text' className='bk-title' placeholder='title' />
        <input type='text' className='author' placeholder='author' />
        <button className='add-book-btn'>add book</button>
      </form>
    </div>
  );
};

export default Books;
