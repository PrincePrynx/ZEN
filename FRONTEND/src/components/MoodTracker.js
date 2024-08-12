import React, { useState } from 'react';
import Garden from './Garden';
import './MoodTracker.css'; // Create this CSS file for styling


function MoodTracker() {
  // State to store mood entries and current mood
  const [mood, setMood] = useState('');
  const [moodEntries, setMoodEntries] = useState([]);

  // Function to handle mood input change
  const handleMoodChange = (event) => {
    setMood(event.target.value);
  };

  // Function to handle mood submission
  const handleMoodSubmit = (event) => {
    event.preventDefault();
    if (mood) {
      setMoodEntries([...moodEntries, mood]);
      setMood(''); // Clear the input after submission
    }
  };

  // Function to determine plant type based on mood
  const getPlantType = (mood) => {
    switch (mood) {
      case 'Happy':
        return '🌻'; // Sunflower for happy mood
      case 'Sad':
        return '🌵'; // Cactus for sad mood
      case 'Angry':
        return '🌲'; // Pine tree for angry mood
      case 'Calm':
        return '🌿'; // Fern for calm mood
      default:
        return '🌱'; // Default plant
    }
  };

  return (
    <div className="mood-tracker">
      <h2>Mood Tracker</h2>
      <form onSubmit={handleMoodSubmit}>
        <select value={mood} onChange={handleMoodChange}>
          <option value="">Select your mood</option>
          <option value="Happy">Happy</option>
          <option value="Sad">Sad</option>
          <option value="Angry">Angry</option>
          <option value="Calm">Calm</option>
        </select>
        <button type="submit">Log Mood</button>
      </form>
      <div className="mood-display">
        <h3>Your Mood Garden</h3>
        <div className="mood-plants">
          {moodEntries.map((entry, index) => (
            <span key={index} className="mood-plant">
              {getPlantType(entry)}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MoodTracker;