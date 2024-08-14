
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  console.log("Rendering HomePage"); // Debug statement

  return (
    <div className="home-page">
      <h1>Welcome to ZEN</h1>
      <p>Select an option to get started:</p>
      <div className="button-container">
        <Link to="/thoughts-villa">
          <button className="home-button">Thoughts Villa</button>
        </Link>
        <Link to="/mood-tracker">
          <button className="home-button">Mood Tracker</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
