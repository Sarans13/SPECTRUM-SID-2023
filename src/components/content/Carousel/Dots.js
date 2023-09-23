import React, { useState, useEffect } from 'react';
import './Dots.css';

function Dots({ activeIndex, totalDots }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [numDots, setNumDots] = useState(7);
  const [activeDotIndex, setActiveDotIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth > 800) {
      setNumDots(7);
    } else if (windowWidth > 464) {
      setNumDots(8);
    } else {
      setNumDots(9);
    }
  }, [windowWidth]);

  useEffect(() => {
    setActiveDotIndex(activeIndex % numDots);
  }, [activeIndex, numDots]);

  return (
    <div className="simpledots-container">
      {Array.from({ length: numDots }).map((_, index) => (
        <div
          key={index}
          className={`dot ${index === activeDotIndex ? 'active' : ''}`}
        ></div>
      ))}
    </div>
  );
}

export default Dots;
