import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/book';

const Book = ({ title, author, id }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteBook(id));
  };

  return (
    <div className='book-container'>
      <h2>{title}</h2>
      <p>{author}</p>
      <button onClick={handleClick} type='button'>
        delete
      </button>
    </div>
  );
};

export default Book;
