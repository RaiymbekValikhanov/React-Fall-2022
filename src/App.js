import './App.css';
import Home from './pages/Home';
import Layout from './components/Layout';
import { Routes, Route, Switch } from 'react-router-dom';
import Rules from './pages/Rules';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    // <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="Главная" element={<Home />} />
          <Route path="ПДД" element={<Rules />} />
          <Route path="Экзамены" element={<Rules />} />
          <Route path="Вход" element={<Login />} />
          <Route path="Регистрация" element={<Register />} />
        </Route>
      </Routes>
    // </div>
  );
}

export default App;
