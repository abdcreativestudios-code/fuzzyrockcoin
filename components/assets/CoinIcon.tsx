export function CoinIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="coinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="50%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#fbbf24" />
        </linearGradient>
        <radialGradient id="coinShine">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="50" cy="50" r="45" fill="url(#coinGradient)" />

      <circle cx="50" cy="50" r="38" stroke="#d97706" strokeWidth="2" fill="none" />

      <text
        x="50"
        y="60"
        fontSize="32"
        fontWeight="bold"
        fill="#d97706"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
      >
        $F
      </text>

      <ellipse cx="35" cy="30" rx="15" ry="10" fill="url(#coinShine)" />
    </svg>
  );
}
