import React, { useRef, useEffect } from 'react';

interface SoundEffectsProps {
  isEnabled: boolean;
}

const SoundEffects: React.FC<SoundEffectsProps> = ({ isEnabled }) => {
  const audioContextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    if (!isEnabled) return;

    const initAudioContext = async () => {
      try {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      } catch (error) {
        console.log('Audio context not supported');
      }
    };

    initAudioContext();

    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, [isEnabled]);

  const playHoverSound = () => {
    if (!audioContextRef.current || !isEnabled) return;

    try {
      const audioContext = audioContextRef.current;
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      // Create a subtle hover sound
      oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(1200, audioContext.currentTime + 0.1);
      
      gainNode.gain.setValueAtTime(0, audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.05, audioContext.currentTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.1);

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
    } catch (error) {
      console.log('Error playing hover sound:', error);
    }
  };

  const playClickSound = () => {
    if (!audioContextRef.current || !isEnabled) return;

    try {
      const audioContext = audioContextRef.current;
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      // Create a subtle click sound
      oscillator.frequency.setValueAtTime(1000, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(500, audioContext.currentTime + 0.05);
      
      gainNode.gain.setValueAtTime(0, audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.08, audioContext.currentTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.05);

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.05);
    } catch (error) {
      console.log('Error playing click sound:', error);
    }
  };

  // Expose sound functions globally for easy access
  useEffect(() => {
    if (isEnabled) {
      (window as any).playHoverSound = playHoverSound;
      (window as any).playClickSound = playClickSound;
    }

    return () => {
      delete (window as any).playHoverSound;
      delete (window as any).playClickSound;
    };
  }, [isEnabled]);

  return null;
};

export default SoundEffects;