import './App.css';
import Home from './pages/Home';
import Layout from './components/Layout';
import { Routes, Route, Switch } from 'react-router-dom';
import Rules from './pages/Rules';
import Login from './pages/Login';
import Register from './pages/Register';
import Exams from './pages/Exams';
import Exam from './pages/Exam';
import React from 'react';
import Cookies from 'universal-cookie';
import Profile from './pages/Profile';
import { CurrentUserProvider } from './providers/UserProvider';

const MyContext = React.createContext({lol: 'lol'});

function App() {
  
  return (
    <CurrentUserProvider>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="" element={<Home />} />
          <Route path="Главная" element={<Home />} />
          <Route path="ПДД" element={<Rules />} />
          <Route path="Экзамены" element={<Exams />} />
          <Route path="Экзамены/:id" element={<Exam />} />
          <Route path="Вход" element={<Login />} />
          <Route path="Регистрация" element={<Register />} />
          <Route path="Профиль" element={<Profile />} />
        </Route>
      </Routes>
    </CurrentUserProvider>
  );
}

export default App;
