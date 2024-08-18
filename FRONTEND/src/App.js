import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ThoughtsVilla from './components/ThoughtsVilla';
import MoodTracker from './components/MoodTracker';
import Navbar from './components/Navbar';
import ThoughtsBacklog from './components/ThoughtsBacklog';
import MotivationalMessage from './components/MotivationalMessage';
import Garden from './components/Garden';
import About from './About';
import ZenAnimation from './components/ZenAnimation';
function App() {
    const [thoughts, setThoughts] = useState([]);
    const [plants, setPlants] = useState([]);
    const [moodCount, setMoodCount] = useState({ happy: 0, sad: 0, angry: 0, relaxed: 0 });
    const [animationDone, setAnimationDone] = useState(false);
  
    const addThought = (thought) => {
      setThoughts((prevThoughts) => [...prevThoughts, thought]);
    };
  
    const addPlant = (plant, mood) => {
      setPlants((prevPlants) => [...prevPlants, plant]);
      setMoodCount((prevCount) => ({ ...prevCount, [mood]: prevCount[mood] + 1 }));
    };
  
    const getMostFrequentMood = () => {
      const moods = Object.keys(moodCount);
      let maxCount = 0;
      let mostFrequentMood = '';
  
      moods.forEach((mood) => {
        if (moodCount[mood] > maxCount) {
          maxCount = moodCount[mood];
          mostFrequentMood = mood;
        }
      });
  
      return mostFrequentMood;
    };
  
    const getMoodMessage = () => {
      const mood = getMostFrequentMood();
      switch (mood) {
        case 'happy':
          return "You've been feeling happy today! Keep up the positive vibes and spread joy to others.";
        case 'sad':
          return "You've been feeling sad today. It's okay to feel down; take some time to care for yourself.";
        case 'angry':
          return "You've been feeling angry today. Try to find a way to release that anger constructively.";
        case 'relaxed':
          return "You've been feeling relaxed today. Keep enjoying the calm and peace!";
        default:
          return "You've had a mix of emotions today. Remember, it's important to acknowledge and process how you feel.";
      }
    };
  
    return (
      <Router>
        <div className="App">
          {!animationDone ? (
            <ZenAnimation onAnimationEnd={() => setAnimationDone(true)} />
          ) : (
            <>
              <Navbar />
              <div className="content">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/thoughts-villa" element={<ThoughtsVilla addThought={addThought} />} />
                  <Route path="/mood-tracker" element={<MoodTracker addPlant={addPlant} moodCount={moodCount} />} />
                  <Route path="/thoughts-backlog" element={<ThoughtsBacklog thoughts={thoughts} />} />
                  <Route path="/motivational-message" element={<MotivationalMessage />} />
                  <Route path="/garden" element={<Garden plants={plants} moodMessage={getMoodMessage()} />} />
                  <Route path="/about" element={<About />} /> {/* Add route for About */}
                </Routes>
              </div>
            </>
          )}
        </div>
      </Router>
    );
  }
  
  export default App;
  