import React from 'react';
import { deleteBook } from '../redux/books/book';
import { useDispatch } from 'react-redux';

const Book = ({ title, author, id, category }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeBookActionCreator(id));
  };

  return (
    <div className='book-container'>
      <h2>{title}</h2>
      <p>{author}</p>
      <button onClick={handleClick}>delete</button>
    </div>
  );
};

export default Book;
