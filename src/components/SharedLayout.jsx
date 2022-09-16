import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const SharedLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default SharedLayout;
