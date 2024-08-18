import React from 'react';
import './Garden.css';

function Garden({ plants, moodMessage }) {
    const radius = 120;
    const angleStep = (2 * Math.PI) / plants.length;

    const emotions = {
        '🌻': 'Happy',
        '🌵': 'Sad',
        '🌺': 'Angry',
        '🍀': 'Relaxed'
    };

    const calculatePosition = (index) => {
        const angle = index * angleStep;
        const x = radius * Math.cos(angle) + radius;
        const y = radius * Math.sin(angle) + radius;
        return { left: `${x}px`, top: `${y}px` };
    };

    return (
        <div className="garden">
            <div className="garden-plants-container">
                {plants.map((plant, index) => (
                    <span
                        key={index}
                        className="garden-plant"
                        style={calculatePosition(index)}
                    >
                        {plant}
                        <div className="tooltip">{emotions[plant]}</div>
                    </span>
                ))}
                {/* <h1 className= "garden-mood-header">Your Garden</h1> */}
            </div>
            <p className="garden-mood-message">{moodMessage}</p>
            <p>
                <a href="/" className="garden-link">Back to Home</a>
            </p>
        </div>
    );
}

export default Garden;
