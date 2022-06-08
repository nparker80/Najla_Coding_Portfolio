import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './contents/Home';
import About from './contents/About';
import Skills from './contents/Skills';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;