import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <Link to='/'>Bookstore CMS</Link>
      <Link to='/'>Books</Link>
      <Link to='categories'>Categories</Link>
    </nav>
  );
};

export default NavBar;
