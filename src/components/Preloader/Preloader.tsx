import React, { useState, useEffect } from 'react';
import Shuffle from '../Shuffle';

interface PreloaderProps {
  onComplete?: () => void;
  minDuration?: number;
  text?: string;
}

const Preloader: React.FC<PreloaderProps> = ({ 
  onComplete, 
  minDuration = 2000,
  text = "UPAY"
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [shuffleComplete, setShuffleComplete] = useState(false);
  const [startTime] = useState(Date.now());

  useEffect(() => {
    const checkComplete = () => {
      const elapsed = Date.now() - startTime;
      if (shuffleComplete && elapsed >= minDuration) {
        handleComplete();
      } else {
        // Check again after a short delay
        setTimeout(checkComplete, 100);
      }
    };

    if (shuffleComplete) {
      checkComplete();
    }
  }, [shuffleComplete, minDuration, startTime]);

  const handleShuffleComplete = () => {
    setShuffleComplete(true);
  };

  const handleComplete = () => {
    setIsVisible(false);
    setTimeout(() => {
      onComplete?.();
    }, 300); // Fade out duration
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`shuffle-preloader ${!isVisible ? 'fade-out' : ''}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.3s ease-out'
      }}
    >
      <Shuffle
        text={text}
        tag="h1"
        duration={0.8}
        shuffleTimes={3}
        stagger={0.08}
        scrambleCharset="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*"
        colorFrom="#ffffff80"
        colorTo="#ffffff"
        threshold={0}
        triggerOnce={true}
        respectReducedMotion={true}
        triggerOnHover={false}
        onShuffleComplete={handleShuffleComplete}
        animationMode="evenodd"
        ease="power3.out"
        maxDelay={0.5}
        style={{
          fontSize: 'inherit',
          fontWeight: 'inherit',
          letterSpacing: '0.1em',
          textTransform: 'uppercase'
        }}
      />
    </div>
  );
};

export default Preloader;