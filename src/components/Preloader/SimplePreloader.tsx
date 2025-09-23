import React, { useState, useEffect } from 'react';
import './SimplePreloader.css';

interface SimplePreloaderProps {
  onComplete?: () => void;
  minDuration?: number;
  text?: string;
}

const SimplePreloader: React.FC<SimplePreloaderProps> = ({ 
  onComplete, 
  minDuration = 2500,
  text = "UPAY"
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onComplete?.();
      }, 300); // Fade out duration
    }, minDuration);

    return () => clearTimeout(timer);
  }, [minDuration, onComplete]);

  if (!isVisible) return null;

  return (
    <div className={`simple-preloader ${!isVisible ? 'fade-out' : ''}`}>
      <div className="simple-shuffle-text">
        {text.split('').map((char, index) => (
          <span 
            key={index} 
            className="simple-shuffle-char"
            style={{ 
              animationDelay: `${index * 0.1}s`,
              '--char-index': index 
            } as React.CSSProperties & { '--char-index': number }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SimplePreloader;