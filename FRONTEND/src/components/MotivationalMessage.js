import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MotivationalMessage.css';

const messages = [
  "You are stronger than you think.",
  "Keep pushing forward.",
  "Every step is progress.",
  "You are capable of amazing things.",
  "Believe in yourself."
];

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function MotivationalMessage() {
  const navigate = useNavigate();
  const message = getRandomMessage();

  return (
    <div className="motivational-message">
      <h1>{message}</h1>
      <div className="button-container">
        <button onClick={() => navigate('/')}>Home</button>
        <button onClick={() => navigate('/thoughts-backlog')}>View Backlog</button>
      </div>
    </div>
  );
}

export default MotivationalMessage;
