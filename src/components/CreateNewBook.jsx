import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import {} from '../redux/books/book';

const CreateNewBook = () => {
  const initialLocalState = { title: '', author: '' };
  const [formData, setFormData] = useState(initialLocalState);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title.trim() && formData.author.trim()) {
      dispatch(
        addBookActionCreator(formData.title, formData.author, nanoid())
      );
    }
    setFormData(initialLocalState);
  };

  const handleChange = (e) => {
    setFormData((data) => {
      const { value, name } = e.target;
      return {
        ...data,
        [name]: value,
      };
    });
  };
  return (
    <form action='#' onSubmit={handleSubmit}>
      <h3>Add new book</h3>
      <input
        type='text'
        className='bk-title'
        placeholder='title'
        value={formData.title}
        name='title'
        onChange={handleChange}
      />
      <input
        type='text'
        className='author'
        placeholder='author'
        value={formData.author}
        name='author'
        onChange={handleChange}
      />

      <button className='add-book-btn'>add book</button>
    </form>
  );
};

export default CreateNewBook;
