import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CreateNewBook from './CreateNewBook';
import Book from './Book';
import { fetchBooks } from '../redux/books/book';

const Books = () => {
  const { booksReducer } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const bookElements = Object.entries(booksReducer.books).map((book) => {
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
    <section className='books'>
      <div className='book-elements'>{bookElements}</div>
      <CreateNewBook />
    </section>
  );
};

export default Books;
