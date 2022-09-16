import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Book from './components/Book';
import Categories from './components/Categories';
import SharedLayout from './components/SharedLayout';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<Book />} />
            <Route path='categories' element={<Categories />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
