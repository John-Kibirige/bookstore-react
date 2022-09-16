import React from 'react';

const CreateNewBook = () => {
  return (
    <form action='#'>
      <h3>Add new book</h3>
      <input type='text' className='bk-title' placeholder='title' />
      <input type='text' className='author' placeholder='author' />
      <button className='add-book-btn'>add book</button>
    </form>
  );
};

export default CreateNewBook;
