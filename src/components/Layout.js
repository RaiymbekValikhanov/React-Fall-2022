import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

import './Layout.css'

const Layout = () => {
  return (
    <div className='page'>
      <Header />
      <div className='main-container'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;