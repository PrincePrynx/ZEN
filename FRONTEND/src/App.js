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
          return "It looks like you’ve felt happy today! That’s wonderful—hold on to that good energy and let it brighten not just your day, but someone else’s too.";
        case 'sad':
          return "You’ve been feeling sad today, and that’s okay. It’s important to give yourself the time and space to feel this. Be gentle with yourself—you deserve care.";
        case 'angry':
          return "You’ve felt angry today. That’s a valid emotion. Try to release it in a way that feels healthy for you, whether that’s through movement, talking, or reflection.";
        case 'relaxed':
          return "You’ve had a calm and relaxing day. Enjoy that peaceful feeling, and remember it’s okay to soak in these quiet moments.";
        default:
          return "Today brought a mix of emotions, which is completely natural. Make sure to recognize each feeling without judgment, and give yourself permission to process them as they come.";
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
  