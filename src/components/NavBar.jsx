import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <header className='header'>
    <nav className='nav-bar'>
      <Link to='/' className='logo'>
        Bookstore CMS
      </Link>
      <Link to='/' className='nav-link'>
        BOOKS
      </Link>
      <Link to='categories' className='nav-link'>
        CATEGORIES
      </Link>
    </nav>
  </header>
);

export default NavBar;
