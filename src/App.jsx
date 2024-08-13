import "./index.css"
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import About from './components/navbar/About';
import Book from  './components/navbar/Book';
import SignUp from './components/navbar/SignUp';
import Login from './components/navbar/Login';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Navbar />} />
        <Route path="/" element={<Header />} />
        <Route path="/About" element={<About />} />
        <Route Path="/Book" element={<Book />}  />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

