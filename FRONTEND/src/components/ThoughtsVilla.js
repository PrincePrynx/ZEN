import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ThoughtsVilla.css';

function ThoughtsVilla({ addThought }) {
  const [thought, setThought] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('rgb(169, 169, 169)');
  const [explosion, setExplosion] = useState(false);
  const navigate = useNavigate();

  const handleThoughtChange = (e) => {
    const inputText = e.target.value;
    setThought(inputText);

    const inputLength = inputText.length;
    const maxLength = 800;
    const colorValue = Math.min(255, Math.floor((inputLength / maxLength) * 255));

    const newBackgroundColor = `rgb(${169 + colorValue}, ${169 + colorValue}, ${169 - colorValue})`;
    setBackgroundColor(newBackgroundColor);
  };

  const handleThoughtSubmit = (e) => {
    e.preventDefault();
    if (!thought.trim()) {
      alert("Please enter a thought before letting it go.");
      return;
    }

    addThought(thought);
    setExplosion(true);
    setTimeout(() => {
      setExplosion(false);
      setThought('');
      setBackgroundColor('rgb(169, 169, 169)');
      navigate('/motivational-message');
    }, 1000);
  };

  return (
    <div className="thoughts-villa" style={{ backgroundColor }}>
      <h1 className={explosion ? 'fade-out' : ''}>Thoughts Villa</h1>
      <form onSubmit={handleThoughtSubmit}>
        <textarea
          value={thought}
          onChange={handleThoughtChange}
          placeholder="Type your thoughts here..."
          className={`thought-input ${explosion ? 'explode' : ''}`}
        ></textarea>
        <button type="submit" className={`submit-button ${explosion ? 'explode' : ''}`}>
          let it go
        </button>
      </form>
    </div>
  );
}

export default ThoughtsVilla;
