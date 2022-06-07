import React from 'react';
import './App.css';
import {
  BrowserRouter as Router
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './contents/Home';
import About from './contents/About';
import Skills from './contents/Skills';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Skills />

      </div>
    </Router>
  );
}

export default App;