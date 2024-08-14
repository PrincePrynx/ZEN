import React from 'react';
import './ThoughtsBacklog.css';

function ThoughtsBacklog({ thoughts }) {
  return (
    <div className="thoughts-backlog">
      <h1>Your Thoughts Backlog</h1>
      {thoughts.length > 0 ? (
        <ul>
          {thoughts.map((thought, index) => (
            <li key={index}>{thought}</li>
          ))}
        </ul>
      ) : (
        <p>No thoughts logged yet.</p>
      )}
    </div>
  );
}

export default ThoughtsBacklog;
