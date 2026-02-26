'use client';

import { motion } from 'framer-motion';

export function Sparkles({ className = "" }: { className?: string }) {
  const sparkles = Array.from({ length: 8 });

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {sparkles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            x: '50%',
            y: '50%',
            scale: 0,
            opacity: 0,
          }}
          animate={{
            x: `${50 + Math.cos((i / sparkles.length) * Math.PI * 2) * 40}%`,
            y: `${50 + Math.sin((i / sparkles.length) * Math.PI * 2) * 40}%`,
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut"
          }}
        >
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
            <circle cx="4" cy="4" r="2" fill="#06ffd1" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

export function FloatingParticles({ count = 12, className = "" }: { count?: number; className?: string }) {
  const particles = Array.from({ length: count });

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-cyan-400"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}
