import React, { useState, useEffect } from 'react';
import './ThoughtsVilla.css';

function ThoughtsVilla() {
  const [thought, setThought] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('rgb(169, 169, 169)');
  const [explosion, setExplosion] = useState(false);
  const [warningMessage, setWarningMessage] = useState('');
  const [motivationalMessage, setMotivationalMessage] = useState('');
  const [thoughtsHistory, setThoughtsHistory] = useState([]);

  // Load existing thoughts from localStorage when the component mounts
  useEffect(() => {
    const storedThoughts = JSON.parse(localStorage.getItem('thoughtsHistory')) || [];
    setThoughtsHistory(storedThoughts);
  }, []);

  const handleThoughtChange = (e) => {
    const inputText = e.target.value;
    setThought(inputText);

    // Calculate the background color based on input length
    const inputLength = inputText.length;
    const maxLength = 800;
    const colorValue = Math.min(255, Math.floor((inputLength / maxLength) * 255));

    const newBackgroundColor = `rgb(${169 + colorValue}, ${169 + colorValue}, ${169 - colorValue})`;
    setBackgroundColor(newBackgroundColor);
  };

  const handleThoughtSubmit = (e) => {
    e.preventDefault();

    if (thought.trim() === '') {
      setWarningMessage('Please enter a thought before letting it go.');
      return;
    }

    // Save the thought to localStorage
    const updatedThoughtsHistory = [...thoughtsHistory, thought];
    setThoughtsHistory(updatedThoughtsHistory);
    localStorage.setItem('thoughtsHistory', JSON.stringify(updatedThoughtsHistory));

    // Clear the input, reset the background, and trigger the explosion animation
    setWarningMessage('');
    setExplosion(true);
    setTimeout(() => {
      setExplosion(false);
      setThought('');
      setBackgroundColor('rgb(169, 169, 169)');

      // Display a motivational message after the explosion
      const messages = [
        "You're stronger than you think.",
        "Letting go is the first step to peace.",
        "You deserve happiness.",
        "Every end is a new beginning.",
        "Stay positive, better days are ahead."
      ];
      setMotivationalMessage(messages[Math.floor(Math.random() * messages.length)]);
    }, 1500); // Duration of the explosion animation
  };

  return (
    <div className="thoughts-villa" style={{ backgroundColor: backgroundColor }}>
      <h1 className={`title ${explosion ? 'hide' : ''}`}>Thoughts Villa</h1>
      <form onSubmit={handleThoughtSubmit}>
        <textarea
          value={thought}
          onChange={handleThoughtChange}
          placeholder="Type your thoughts here..."
          className={`thought-input ${explosion ? 'move-down shoot-up explode' : ''}`}
        ></textarea>
        {warningMessage && <p className="warning-message">{warningMessage}</p>}
        <button
          type="submit"
          className={`submit-button ${explosion ? 'explode-button' : ''}`}
        >
          let it go
        </button>
      </form>
      {motivationalMessage && (
        <div className="motivational-message">
          <p>{motivationalMessage}</p>
          <button onClick={() => window.location.href = '/'}>Go back to Home</button>
        </div>
      )}
      <div className="thoughts-history">
        <h2>Your Thought Backlog</h2>
        <ul>
          {thoughtsHistory.map((t, index) => (
            <li key={index}>{t}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ThoughtsVilla;
