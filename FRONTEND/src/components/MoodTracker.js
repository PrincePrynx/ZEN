import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MoodTracker.css';

function MoodTracker({ addPlant, moodCount }) {
    const [mood, setMood] = useState('');
    const navigate = useNavigate();

    const handleMoodSelect = (selectedMood, plant) => {
        setMood(selectedMood);
        addPlant(plant, selectedMood); // Add both plant and mood to the garden
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

    const canViewGarden = Object.values(moodCount).reduce((total, count) => total + count, 0) > 4;

    return (
        <div className="mood-tracker" style={{ backgroundColor: getBackgroundColor() }}>
            <h1>MOOD TRACKER</h1>
            <p>How are you feeling at the moment?</p>
            <div className="mood-options">
                <button onClick={() => handleMoodSelect('happy', '🌻')}>Happy</button>
                <button onClick={() => handleMoodSelect('sad', '🌵')}>Sad</button>
                <button onClick={() => handleMoodSelect('angry', '🌺')}>Angry</button>
                <button onClick={() => handleMoodSelect('relaxed', '🍀')}>Relaxed</button>
            </div>
            <div className="view-garden">
                <button 
                    onClick={() => navigate('/garden')}
                    disabled={!canViewGarden}
                >
                    View Your Garden
                </button>
                {!canViewGarden && <p className="mood-warning">Make at least 5 mood entries to view your garden.</p>}
            </div>
        </div>
    );
}

export default MoodTracker;
