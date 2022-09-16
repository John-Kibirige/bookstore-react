import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <NavLink to='/'>Bookstore CMS</NavLink>
      <NavLink to='/'>Books</NavLink>
      <NavLink to='categories'>Categories</NavLink>
    </nav>
  );
};

export default NavBar;
