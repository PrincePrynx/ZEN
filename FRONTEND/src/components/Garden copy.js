import React from 'react';
import './Garden.css';

function Garden({ plants }) {
    return (
        <div className="garden">
            <h1>Your Garden</h1>
            <div className="plants-container">
                {plants.map((plant, index) => (
                    <span key={index} className="plant">
                        {plant}
                    </span>
                ))}
            </div>
            <p>
                <a href="/">Back to Home</a>
            </p>
        </div>
    );
}

export default Garden;
