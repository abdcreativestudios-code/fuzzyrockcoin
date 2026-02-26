export function CrystalIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="crystalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a0f0e8" />
          <stop offset="50%" stopColor="#06ffd1" />
          <stop offset="100%" stopColor="#04d9b8" />
        </linearGradient>
        <filter id="crystalGlow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      <path
        d="M 50 10 L 70 35 L 85 60 L 75 85 L 50 95 L 25 85 L 15 60 L 30 35 Z"
        fill="url(#crystalGradient)"
        filter="url(#crystalGlow)"
        opacity="0.9"
      />

      <path d="M 50 10 L 50 95" stroke="#fff" strokeWidth="1" opacity="0.3" />
      <path d="M 30 35 L 70 35" stroke="#fff" strokeWidth="1" opacity="0.3" />
      <path d="M 15 60 L 85 60" stroke="#fff" strokeWidth="1" opacity="0.3" />

      <circle cx="50" cy="50" r="3" fill="#fff" opacity="0.6" />
    </svg>
  );
}
