import { Outlet } from 'react-router-dom';
import Header from './Header';
import './Layout.css'

const Layout = () => {
  return (
    <>
    <Header />
    <div className='main-container'>
      <Outlet />
    </div>
    </>
    );
};

export default Layout;