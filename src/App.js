import React, { useEffect, useState } from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './contents/Home';
import About from './contents/About';
import Skills from './contents/Skills';
import Contact from './contents/Contact';
import Portfolio from './contents/Portfolio';
import Navbar from './components/Navbar';

const App = () => {
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    fetch("/resumeData.json")
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data);
      });
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Portfolio data={resumeData.portfolio} />
      </div>
    </BrowserRouter>
  );
}

export default App;