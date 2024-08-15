import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ThoughtsVilla from './components/ThoughtsVilla';
import MoodTracker from './components/MoodTracker';
import Navbar from './components/Navbar';
import ThoughtsBacklog from './components/ThoughtsBacklog';
import MotivationalMessage from './components/MotivationalMessage';
import Garden from './components/Garden';
import ZenAnimation from './components/ZenAnimation';

function App() {
    const [thoughts, setThoughts] = useState([]);
    const [plants, setPlants] = useState([]);
    const [showZenAnimation, setShowZenAnimation] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShowZenAnimation(false), 4000);
        return () => clearTimeout(timer);
    }, []);

    const addThought = (thought) => {
        setThoughts((prevThoughts) => [...prevThoughts, thought]);
    };

    const addPlant = (plant) => {
        setPlants((prevPlants) => {
            console.log('Updated plants:', [...prevPlants, plant]);
            return [...prevPlants, plant];
        });
    };

    return (
        <Router>
            <div className="App">
                {showZenAnimation ? (
                    <ZenAnimation />
                ) : (
                    <>
                        <Navbar />
                        <div className="content">
                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route path="/thoughts-villa" element={<ThoughtsVilla addThought={addThought} />} />
                                <Route path="/mood-tracker" element={<MoodTracker addPlant={addPlant} />} />
                                <Route path="/thoughts-backlog" element={<ThoughtsBacklog thoughts={thoughts} />} />
                                <Route path="/motivational-message" element={<MotivationalMessage />} />
                                <Route path="/garden" element={<Garden plants={plants} />} />
                            </Routes>
                        </div>
                    </>
                )}
            </div>
        </Router>
    );
}

export default App;
