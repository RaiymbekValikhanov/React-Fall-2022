import './App.css';
import Home from './pages/Home';
import Layout from './components/Layout';
import { Routes, Route, Navigate } from 'react-router-dom';
import Rules from './pages/Rules';

function App() {
  return (
    // <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path={"/"} element={<Home />} />
          <Route path={"Главная"} element={<Home />} />
          <Route path="/ПДД" element={<Rules />} />
          <Route path="/Экзамены" element={<Rules />} />
        </Route>
      </Routes>
    // </div>
  );
}

export default App;
