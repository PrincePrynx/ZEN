// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ThoughtsVilla from './components/ThoughtsVilla';
import MoodTracker from './components/MoodTracker';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const [moods, setMoods] = useState([]);

  const addMood = (mood) => {
    setMoods((prevMoods) => [...prevMoods, mood]);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/thoughts-villa" element={<ThoughtsVilla />} />
            <Route path="/mood-tracker" element={<MoodTracker addMood={addMood} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
