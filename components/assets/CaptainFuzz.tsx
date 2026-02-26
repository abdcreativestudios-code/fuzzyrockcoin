export function CaptainFuzzMascot({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="fuzzGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06ffd1" />
          <stop offset="50%" stopColor="#a0f0e8" />
          <stop offset="100%" stopColor="#06ffd1" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      <circle cx="100" cy="110" r="60" fill="url(#fuzzGradient)" opacity="0.8" filter="url(#glow)" />

      <ellipse cx="85" cy="100" rx="8" ry="12" fill="#000" />
      <ellipse cx="115" cy="100" rx="8" ry="12" fill="#000" />

      <ellipse cx="86" cy="98" rx="3" ry="4" fill="#fff" />
      <ellipse cx="116" cy="98" rx="3" ry="4" fill="#fff" />

      <path d="M 85 120 Q 100 130 115 120" stroke="#000" strokeWidth="3" fill="none" strokeLinecap="round" />

      <ellipse cx="100" cy="40" rx="35" ry="15" fill="#1e40af" />
      <ellipse cx="100" cy="40" rx="30" ry="12" fill="#3b82f6" />
      <circle cx="100" cy="38" r="6" fill="#fbbf24" opacity="0.95" />
      <circle cx="100" cy="38" r="5" fill="#f59e0b" opacity="0.8" />
      <text x="100" y="40.5" fontSize="5" fontWeight="bold" fill="#000" textAnchor="middle">$F</text>

      <path d="M 50 100 L 40 95 L 45 105 Z" fill="url(#fuzzGradient)" opacity="0.6" />
      <path d="M 150 100 L 160 95 L 155 105 Z" fill="url(#fuzzGradient)" opacity="0.6" />

      <circle cx="70" cy="80" r="2" fill="#06ffd1" opacity="0.8" />
      <circle cx="130" cy="75" r="2" fill="#06ffd1" opacity="0.8" />
      <circle cx="60" cy="120" r="2" fill="#06ffd1" opacity="0.8" />
      <circle cx="140" cy="125" r="2" fill="#06ffd1" opacity="0.8" />
    </svg>
  );
}
