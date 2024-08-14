import React, { useState } from 'react';
import './MoodTracker.css';

function MoodTracker({ addMood, addPlant }) {
    const [mood, setMood] = useState('');

    const handleMoodSelect = (selectedMood, plant) => {
        setMood(selectedMood);
        addMood(selectedMood);
        addPlant(plant);
    };

    const getBackgroundColor = () => {
        switch (mood) {
            case 'happy':
                return 'lightgreen';
            case 'sad':
                return 'lightblue';
            case 'angry':
                return 'lightcoral';
            case 'relaxed':
                return 'lightyellow';
            default:
                return 'white';
        }
    };

    return (
        <div className="mood-tracker" style={{ backgroundColor: getBackgroundColor() }}>
            <h1>Mood Tracker</h1>
            <p>how are you feeling?</p>
            <div className="mood-options">
                <button onClick={() => handleMoodSelect('happy', '🌻')}>Happy</button>
                <button onClick={() => handleMoodSelect('sad', '🌵')}>Sad</button>
                <button onClick={() => handleMoodSelect('angry', '🌺')}>Angry</button>
                <button onClick={() => handleMoodSelect('relaxed', '🍀')}>Relaxed</button>
            </div>
            <p>
                <a href="/garden">View Your Garden</a>
            </p>
        </div>
    );
}

export default MoodTracker;
