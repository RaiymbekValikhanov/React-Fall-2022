import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

import './Layout.css'

const Layout = () => {
  const location = useLocation();

  return (
    <div className='page'>
      <Header activeItem={decodeURI(location.pathname.slice(1))}/>
      <div className='main-container'>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;