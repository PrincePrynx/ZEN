
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MotivationalMessage.css';

const messages = [
  "You’ve made it through tough moments before, and you’ll make it through this one too. Trust in your resilience.",
  "It’s okay to feel this way. You are allowed to rest here for a moment; brighter days will come.",
  "You are not defined by this thought or feeling. You are so much more than what you're going through.",
  "Take a deep breath. You are worthy of peace, no matter how heavy things may feel right now.",
  "Progress isn’t always visible, but every small step counts. You are moving forward.",
  "Your strength lies not just in pushing through but in being gentle with yourself, keeping calm and showing trust.",
  "You are enough just as you are, even when things feel overwhelming.",
  "The weight of today does not determine the potential of tomorrow. There’s hope in every new day.",
  "Your feelings are valid, and so is your ability to rise above them, one moment at a time.",
  "Remember, healing is not linear. Give yourself grace as you grow through this.",
  "In this moment, it’s enough to simply be. You are doing your best, and that is more than enough.",
  "You are loved, and your presence in this world matters more than you know.",
  "No matter how dark it feels right now, you are a light in this world. Hold on to that.",
  "You deserve kindness, especially from yourself. Take this moment to be gentle with your heart.",
  "It’s okay to not have all the answers right now. Just breathe and let yourself be in this moment.",
  "Even when you feel lost, remember that you are never alone on this journey. You are supported.",
  "Embrace your feelings, but don’t let them define you. You are evolving every day.",
  "Your path is unique, and no one else can walk it for you. Trust that you are exactly where you need to be.",
  "The storm will pass, and you will emerge stronger. Trust in your ability to weather it.",
  "You are not broken; you are healing in ways you cannot yet see. Give yourself time.",
  "Every time you show up for yourself, even in the smallest way, it is a victory worth celebrating.",
  "Your courage is not in never feeling pain, but in continuing despite it. You are braver than you realize."
];

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function MotivationalMessage() {
  const [displayedText, setDisplayedText] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Set a new random message
    const newMessage = getRandomMessage();
    setMessage(newMessage);
    setDisplayedText(''); // Clear displayed text on message change

    let index = 0;
    const typingInterval = setInterval(() => {
      setDisplayedText(prev => {
        // Make sure prev is not undefined
        const text = prev || '';
        if (index < newMessage.length) {
          return text + newMessage[index];
        }
        return text;
      });
      index++;
      if (index >= newMessage.length) {
        clearInterval(typingInterval);
      }
    }, 50); // Adjust typing speed here

    return () => clearInterval(typingInterval);
  }, [message]);

  return (
    <div className="motivational-message-container">
      <div className="motivational-message">
        <div className="typing-animation">
          {displayedText}
          <span className="blinking-cursor"></span> {/* Blinking cursor */}
        </div>
      </div>
      <div className="button-container">
        <button onClick={() => navigate('/thoughts-backlog')}>View Backlog</button>
      </div>
    </div>
  );
}

export default MotivationalMessage;