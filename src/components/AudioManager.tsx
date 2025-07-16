import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

interface AudioManagerProps {
  className?: string;
}

const AudioManager: React.FC<AudioManagerProps> = ({ className = '' }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);

  // Create ambient space sound using Web Audio API
  useEffect(() => {
    const createAmbientSound = async () => {
      try {
        // Create audio context
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
        const audioContext = audioContextRef.current;

        // Create gain node for volume control
        gainNodeRef.current = audioContext.createGain();
        gainNodeRef.current.gain.setValueAtTime(volume, audioContext.currentTime);

        // Create oscillators for ambient space sounds
        const createOscillator = (frequency: number, type: OscillatorType, gain: number) => {
          const oscillator = audioContext.createOscillator();
          const oscGain = audioContext.createGain();
          
          oscillator.type = type;
          oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
          oscGain.gain.setValueAtTime(gain, audioContext.currentTime);
          
          // Add subtle frequency modulation for organic feel
          const lfo = audioContext.createOscillator();
          const lfoGain = audioContext.createGain();
          lfo.frequency.setValueAtTime(0.1, audioContext.currentTime);
          lfoGain.gain.setValueAtTime(2, audioContext.currentTime);
          
          lfo.connect(lfoGain);
          lfoGain.connect(oscillator.frequency);
          
          oscillator.connect(oscGain);
          oscGain.connect(gainNodeRef.current!);
          
          return { oscillator, lfo, gain: oscGain };
        };

        // Create multiple layers of ambient sound
        const sounds = [
          createOscillator(60, 'sine', 0.1),    // Deep space rumble
          createOscillator(120, 'sine', 0.08),  // Mid-range ambience
          createOscillator(240, 'sine', 0.06),  // Higher harmonics
          createOscillator(80, 'triangle', 0.05), // Warm undertone
        ];

        // Create noise for stellar wind effect
        const bufferSize = audioContext.sampleRate * 2;
        const noiseBuffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        
        for (let i = 0; i < bufferSize; i++) {
          output[i] = (Math.random() * 2 - 1) * 0.02;
        }
        
        const noiseSource = audioContext.createBufferSource();
        const noiseGain = audioContext.createGain();
        const noiseFilter = audioContext.createBiquadFilter();
        
        noiseSource.buffer = noiseBuffer;
        noiseSource.loop = true;
        noiseFilter.type = 'lowpass';
        noiseFilter.frequency.setValueAtTime(200, audioContext.currentTime);
        noiseGain.gain.setValueAtTime(0.03, audioContext.currentTime);
        
        noiseSource.connect(noiseFilter);
        noiseFilter.connect(noiseGain);
        noiseGain.connect(gainNodeRef.current);

        // Connect to destination
        gainNodeRef.current.connect(audioContext.destination);

        // Store references for cleanup
        (audioRef.current as any).customSounds = { sounds, noiseSource };
        
        setIsLoaded(true);
      } catch (error) {
        console.log('Audio context not supported or blocked');
        setIsLoaded(false);
      }
    };

    createAmbientSound();

    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  const togglePlay = async () => {
    if (!audioContextRef.current || !isLoaded) return;

    try {
      if (audioContextRef.current.state === 'suspended') {
        await audioContextRef.current.resume();
      }

      if (isPlaying) {
        // Stop all sounds
        const customSounds = (audioRef.current as any)?.customSounds;
        if (customSounds) {
          customSounds.sounds.forEach(({ oscillator, lfo }: any) => {
            try {
              oscillator.stop();
              lfo.stop();
            } catch (e) {
              // Oscillator already stopped
            }
          });
          try {
            customSounds.noiseSource.stop();
          } catch (e) {
            // Noise source already stopped
          }
        }
        setIsPlaying(false);
      } else {
        // Start all sounds
        const customSounds = (audioRef.current as any)?.customSounds;
        if (customSounds) {
          customSounds.sounds.forEach(({ oscillator, lfo }: any) => {
            oscillator.start();
            lfo.start();
          });
          customSounds.noiseSource.start();
        }
        setIsPlaying(true);
      }
    } catch (error) {
      console.log('Error controlling audio:', error);
    }
  };

  const toggleMute = () => {
    if (gainNodeRef.current) {
      if (isMuted) {
        gainNodeRef.current.gain.setValueAtTime(volume, audioContextRef.current!.currentTime);
      } else {
        gainNodeRef.current.gain.setValueAtTime(0, audioContextRef.current!.currentTime);
      }
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
    if (gainNodeRef.current && !isMuted) {
      gainNodeRef.current.gain.setValueAtTime(newVolume, audioContextRef.current!.currentTime);
    }
  };

  if (!isLoaded) {
    return null;
  }

  return (
    <div className={`fixed top-20 right-4 z-50 ${className}`}>
      <div className="bg-black/80 backdrop-blur-xl rounded-2xl p-4 border border-gray-800/50 shadow-2xl">
        <div className="flex items-center space-x-3">
          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            className="group relative p-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105"
            aria-label={isPlaying ? 'Pause ambient sound' : 'Play ambient sound'}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            {isPlaying ? (
              <Pause className="w-5 h-5 text-cyan-400 relative z-10" />
            ) : (
              <Play className="w-5 h-5 text-cyan-400 relative z-10" />
            )}
          </button>

          {/* Mute Button */}
          <button
            onClick={toggleMute}
            className="group relative p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30 hover:border-purple-400 transition-all duration-300 transform hover:scale-105"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            {isMuted ? (
              <VolumeX className="w-5 h-5 text-purple-400 relative z-10" />
            ) : (
              <Volume2 className="w-5 h-5 text-purple-400 relative z-10" />
            )}
          </button>

          {/* Volume Slider */}
          <div className="flex items-center space-x-2">
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
              className="w-20 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
              style={{
                background: `linear-gradient(to right, #06b6d4 0%, #06b6d4 ${volume * 100}%, #374151 ${volume * 100}%, #374151 100%)`
              }}
            />
          </div>
        </div>

        {/* Sound Indicator */}
        {isPlaying && (
          <div className="flex items-center justify-center mt-3 space-x-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-1 bg-gradient-to-t from-cyan-500 to-purple-500 rounded-full animate-pulse"
                style={{
                  height: `${8 + Math.random() * 12}px`,
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: `${0.8 + Math.random() * 0.4}s`
                }}
              ></div>
            ))}
          </div>
        )}
      </div>

      {/* Audio element for fallback */}
      <audio ref={audioRef} style={{ display: 'none' }} />
    </div>
  );
};

export default AudioManager;