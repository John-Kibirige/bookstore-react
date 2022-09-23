import React, { useEffect } from 'react';
import Book from './Book';
import CreateNewBook from './CreateNewBook';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/books/book';

const Books = () => {
  const state = useSelector((state) => state.books);
  const books = Object.entries(state.books);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const bookElements = books.map((book) => {
    const [bookId, bookDetails] = book;
    const { title, author, category } = bookDetails[0];

    return (
      <Book
        title={title}
        author={author}
        key={bookId}
        id={bookId}
        category={category}
      />
    );
  });

  return (
    <div className='books-container'>
      <div className='book-elements'>{bookElements}</div>
      <CreateNewBook />
    </div>
  );
};

export default Books;
