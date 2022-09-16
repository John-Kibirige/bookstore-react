import React from 'react';

const Book = ({ title, author }) => {
  return (
    <div className='book-container'>
      <h2>{title}</h2>
      <p>{author}</p>
    </div>
  );
};

export default Book;
