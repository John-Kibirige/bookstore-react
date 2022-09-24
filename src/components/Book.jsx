import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/book';

const Book = ({ title, author, id, category }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteBook(id));
  };

  const percentageCompletion = Math.floor(Math.random() * 100) + 1;

  return (
    <div className='book-container'>
      <div className='part-one'>
        <h3 className='category'>{category}</h3>
        <h2 className='title'>{title}</h2>
        <p className='author'>{author}</p>

        <div className='btn-set'>
          <button type='button'>Comments</button>
          <button onClick={handleClick} type='button'>
            Remove
          </button>
          <button type='button'>Edit</button>
        </div>
      </div>

      <div className='part-two'>
        <div className='dashboard'>
          <svg>
            <circle class='bg' cx='32' cy='32' r='28' />
            <circle class='meter-1' cx='32' cy='32' r='28' />
          </svg>
          <div className='complete-per'>
            <p className='completion'>{percentageCompletion}%</p>
            <p className='text-completioin'>Completed</p>
          </div>
        </div>
      </div>

      <hr className='seperator' />

      <div className='part-three'>
        <h3 className='current-chapter'>Current chapter</h3>
        <p>Chapter 17</p>
        <button className='update-progress' type='button'>
          UPDATE PROGRESS
        </button>
      </div>
    </div>
  );
};

export default Book;
