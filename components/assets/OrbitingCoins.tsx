'use client';

interface OrbitingCoinsProps {
  count?: number;
}

export function OrbitingCoins({ count = 5 }: OrbitingCoinsProps) {
  const coins = Array.from({ length: count }, (_, i) => ({
    id: i,
    delay: (i / count) * 10,
    duration: 10 + i * 0.5,
  }));

  return (
    <>
      <style jsx>{`
        @keyframes orbitCoin {
          0% {
            transform: rotate(0deg) translateX(200px) rotate(0deg);
            opacity: 0.9;
            filter: blur(0px);
          }
          25% {
            opacity: 0.7;
            filter: blur(0.5px);
          }
          50% {
            transform: rotate(180deg) translateX(200px) rotate(-180deg);
            opacity: 0.5;
            filter: blur(1px);
          }
          75% {
            opacity: 0.7;
            filter: blur(0.5px);
          }
          100% {
            transform: rotate(360deg) translateX(200px) rotate(-360deg);
            opacity: 0.9;
            filter: blur(0px);
          }
        }

        @media (max-width: 768px) {
          @keyframes orbitCoin {
            0% {
              transform: rotate(0deg) translateX(140px) rotate(0deg);
              opacity: 0.9;
              filter: blur(0px);
            }
            25% {
              opacity: 0.7;
              filter: blur(0.5px);
            }
            50% {
              transform: rotate(180deg) translateX(140px) rotate(-180deg);
              opacity: 0.5;
              filter: blur(1px);
            }
            75% {
              opacity: 0.7;
              filter: blur(0.5px);
            }
            100% {
              transform: rotate(360deg) translateX(140px) rotate(-360deg);
              opacity: 0.9;
              filter: blur(0px);
            }
          }
        }
      `}</style>
      {coins.map((coin) => (
        <div
          key={coin.id}
          className="absolute left-1/2 top-1/2 -ml-6 -mt-6 pointer-events-none"
          style={{
            animation: `orbitCoin ${coin.duration}s linear infinite`,
            animationDelay: `-${coin.delay}s`,
          }}
        >
          <FuzzCoin />
        </div>
      ))}
    </>
  );
}

function FuzzCoin() {
  const uniqueId = Math.random().toString(36).substr(2, 9);
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        filter: 'drop-shadow(0 2px 12px rgba(251, 191, 36, 0.5))',
      }}
    >
      <defs>
        <linearGradient id={`coinGradient-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="50%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
        <radialGradient id={`coinShine-${uniqueId}`}>
          <stop offset="0%" stopColor="#fef3c7" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#fbbf24" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="20" cy="20" r="18" fill={`url(#coinGradient-${uniqueId})`} />

      <circle cx="20" cy="20" r="17" fill="none" stroke="#d97706" strokeWidth="1.5" opacity="0.5" />
      <circle cx="20" cy="20" r="15.5" fill="none" stroke="#fbbf24" strokeWidth="0.8" opacity="0.3" />

      <ellipse cx="14" cy="11" rx="9" ry="7" fill={`url(#coinShine-${uniqueId})`} opacity="0.6" />

      <text
        x="20"
        y="20.5"
        fontSize="8"
        fontWeight="900"
        fill="#92400e"
        textAnchor="middle"
        fontFamily="sans-serif"
        dominantBaseline="middle"
        letterSpacing="-0.3"
        opacity="0.3"
      >
        $FUZZ
      </text>

      <text
        x="20"
        y="20"
        fontSize="8"
        fontWeight="900"
        fill="#78350f"
        textAnchor="middle"
        fontFamily="sans-serif"
        dominantBaseline="middle"
        letterSpacing="-0.3"
      >
        $FUZZ
      </text>

      <text
        x="20"
        y="19.5"
        fontSize="8"
        fontWeight="900"
        fill="#fef3c7"
        textAnchor="middle"
        fontFamily="sans-serif"
        dominantBaseline="middle"
        letterSpacing="-0.3"
        opacity="0.5"
      >
        $FUZZ
      </text>
    </svg>
  );
}
