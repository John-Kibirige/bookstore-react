import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { addNewBook } from '../redux/books/book';

const CreateNewBook = () => {
  const initialLocalState = { title: '', author: '' };
  const [formData, setFormData] = useState(initialLocalState);
  const dispatch = useDispatch();

  const getRandomCategory = () => {
    const categories = [
      'FIction',
      'Classics',
      'Science',
      'Arts',
      'Love and Romance',
      'Politics',
      'Psychology',
      'Geology',
      'Physics',
      'Botany',
    ];

    const randomInd = Math.floor(Math.random() * 10);
    return categories[randomInd];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title.trim() && formData.author.trim()) {
      const postMethodBody = {
        item_id: nanoid(),
        title: formData.title,
        author: formData.author,
        category: getRandomCategory(),
      };
      dispatch(addNewBook(postMethodBody));
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
