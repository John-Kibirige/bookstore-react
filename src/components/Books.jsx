import React, { useEffect } from 'react';
import Book from './Book';
import CreateNewBook from './CreateNewBook';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/books/book';

const Books = () => {
  const books = useSelector((state) => state.books);
  console.log('the books at this instance ', books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  // const bookElements = books.map((book) => (
  //   <Book title={book.title} author={book.author} key={book.id} id={book.id} />
  // ));
  return (
    <div className='books-container'>
      <div className='book-elements'>Books</div>
      <CreateNewBook />
    </div>
  );
};

export default Books;
