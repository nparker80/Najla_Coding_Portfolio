import React from 'react';
import './App.css';
import {
  BrowserRouter as Router
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './contents/Home';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Home />

      </div>
    </Router>
  );
}

export default App;