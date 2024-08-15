import React, { useEffect } from 'react';
import './ZenAnimation.css';

function ZenAnimation({ onAnimationEnd }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onAnimationEnd();
        }, 30000); // Duration to match the length of animation

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
                <span className="word" style={{ animationDelay: '0.5s' }}>SUPPORT,</span>
                <span className="word" style={{ animationDelay: '1s' }}>EVERY</span>
                <span className="word" style={{ animationDelay: '1.5s' }}>STEP</span>
                <span className="word" style={{ animationDelay: '2s' }}>OF</span>
                <span className="word" style={{ animationDelay: '2.5s' }}>THE</span>
                <span className="word" style={{ animationDelay: '3s' }}>WAY</span>
            </div>
        </div>
    );
}

export default ZenAnimation;
