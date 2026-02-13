import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

interface RouteTransitionOverlayProps {
  isActive: boolean;
  onComplete: () => void;
}

export default function RouteTransitionOverlay({ isActive, onComplete }: RouteTransitionOverlayProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [particles, setParticles] = useState<Array<{ id: number; type: 'heart' | 'butterfly'; delay: number; left: number; duration: number }>>([]);

  useEffect(() => {
    if (isActive) {
      // Generate 20-30 particles (mix of hearts and butterflies)
      const particleCount = 25;
      const newParticles = Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        type: Math.random() > 0.5 ? 'heart' : 'butterfly' as 'heart' | 'butterfly',
        delay: Math.random() * 0.5,
        left: Math.random() * 100,
        duration: 2 + Math.random() * 1.5,
      }));
      setParticles(newParticles);

      // Complete the transition after animation duration
      const duration = prefersReducedMotion ? 300 : 2500;
      const timer = setTimeout(() => {
        onComplete();
      }, duration);

      return () => clearTimeout(timer);
    } else {
      setParticles([]);
    }
  }, [isActive, onComplete, prefersReducedMotion]);

  if (!isActive) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] pointer-events-none transition-overlay"
      aria-hidden="true"
    >
      {/* Background veil that fades in and out */}
      <div className="absolute inset-0 bg-rose-50/95 dark:bg-rose-950/95 animate-veil" />
      
      {/* Particle container */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute animate-particle-fall"
            style={{
              left: `${particle.left}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
              top: '-10%',
            }}
          >
            {particle.type === 'heart' ? (
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="animate-particle-spin"
                style={{
                  animationDelay: `${particle.delay}s`,
                  animationDuration: `${particle.duration * 0.8}s`,
                }}
              >
                <path
                  d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                  fill="oklch(0.55 0.18 15)"
                  className="opacity-80"
                />
              </svg>
            ) : (
              <img
                src="/assets/generated/butterfly-particle.dim_128x128.png"
                alt=""
                className="w-8 h-8 animate-particle-flutter"
                style={{
                  animationDelay: `${particle.delay}s`,
                  animationDuration: `${particle.duration * 0.6}s`,
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
