import React from 'react';

function Garden({ moods }) {
  return (
    <div className="garden">
      <h1>My Garden</h1>
      <div className="garden-container">
        {moods.length === 0 ? (
          <p>No moods tracked yet.</p>
        ) : (
          moods.map((mood, index) => (
            <div key={index} className="plant">
              {mood}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

