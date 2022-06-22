import React, { useEffect, useState } from "react";
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About, Contact, Portfolio, Skills, Home } from './contents';
import { Navbar } from './components';

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
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio data={resumeData.portfolio} />} />
        </Routes>
      </div>
    </BrowserRouter >
  );
}

export default App;