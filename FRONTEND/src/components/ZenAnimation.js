import React, { useEffect } from 'react';
import './ZenAnimation.css';

function ZenAnimation({ onAnimationEnd }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onAnimationEnd();  // Call the function passed via props to notify the animation is done
        }, 4000); // Shorter duration to match the length of the animation

        return () => clearTimeout(timer);
    }, [onAnimationEnd]);

    return (
        <div className="zen-animation">
            <div className="circle"></div>
            <div className="zen-text">
                <span className="letter" style={{ animationDelay: '0s' }}>Z</span>
                <span className="letter" style={{ animationDelay: '0.2s' }}>E</span>
                <span className="letter" style={{ animationDelay: '0.4s' }}>N</span>
            </div>
            <div className="slogan">
                <span className="word" style={{ animationDelay: '0s' }}>DAILY</span>
                <span className="word" style={{ animationDelay: '0.3s' }}>SUPPORT,</span>
                <span className="word" style={{ animationDelay: '0.6s' }}>EVERY</span>
                <span className="word" style={{ animationDelay: '0.9s' }}>STEP</span>
                <span className="word" style={{ animationDelay: '1.2s' }}>OF</span>
                <span className="word" style={{ animationDelay: '1.5s' }}>THE</span>
                <span className="word" style={{ animationDelay: '1.8s' }}>WAY</span>
            </div>
        </div>
    );
}

export default ZenAnimation;
