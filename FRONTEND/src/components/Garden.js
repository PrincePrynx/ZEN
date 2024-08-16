import React from 'react';
import './Garden.css';

function Garden({ plants, moodMessage }) {
    const radius = 120; // Radius for the circle of emojis
    const angleStep = (2 * Math.PI) / plants.length;

    const calculatePosition = (index) => {
        const angle = index * angleStep;
        const x = radius * Math.cos(angle) + (radius + 50); // Center the circle
        const y = radius * Math.sin(angle) + (radius + 50); // Center the circle
        return { left: `${x}px`, top: `${y}px` };
    };

    return (
        <div className="garden">
            <div className="plants-container">
                {plants.map((plant, index) => (
                    <span
                        key={index}
                        className="plant"
                        style={calculatePosition(index)}
                    >
                        {plant}
                    </span>
                ))}
            </div>
            <p className="mood-message">{moodMessage}</p>
            <p>
                <a href="/">Back to Home</a>
            </p>
        </div>
    );
}

export default Garden;
