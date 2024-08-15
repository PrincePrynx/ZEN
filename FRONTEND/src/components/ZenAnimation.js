import React, { useEffect } from 'react';
import './ZenAnimation.css';

function ZenAnimation({ onAnimationEnd }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onAnimationEnd();
        }, 8000); // Adjust the duration to match the length of your animation

        return () => clearTimeout(timer);
    }, [onAnimationEnd]);

    return (
        <div className="zen-animation">
            <div className="circle"></div>
            <div className="zen-text">ZEN</div>
            <div className="slogan">DAILY SUPPORT, EVERY STEP OF THE WAY</div>
        </div>
    );
}

export default ZenAnimation;
