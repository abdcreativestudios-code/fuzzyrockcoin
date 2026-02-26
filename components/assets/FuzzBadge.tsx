'use client';

export function FuzzBadge() {
  return (
    <div
      className="hatBadge absolute pointer-events-none"
      style={{
        left: '50.8%',
        top: '17.8%',
        transform: 'translate(-50%, -50%)',
        zIndex: 50,
      }}
    >
      <style jsx>{`
        .hatBadge {
          width: 26px;
          height: 26px;
        }
        @media (max-width: 640px) {
          .hatBadge {
            width: 22px;
            height: 22px;
            left: 51.2% !important;
            top: 18.2% !important;
          }
          .hatBadge .badgeText {
            font-size: 8px !important;
          }
        }
      `}</style>

      <div className="relative flex items-center justify-center w-full h-full">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.35), inset 0 1px 3px rgba(255, 255, 255, 0.4), inset 0 -1px 3px rgba(120, 53, 15, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.22)',
          }}
        />

        <div
          className="absolute inset-[2px] rounded-full"
          style={{
            border: '1px solid rgba(120, 53, 15, 0.25)',
          }}
        />

        <div
          className="absolute rounded-full"
          style={{
            top: '20%',
            left: '25%',
            width: '35%',
            height: '35%',
            background: 'radial-gradient(circle at 40% 40%, rgba(254, 243, 199, 0.8), transparent)',
            filter: 'blur(2px)',
          }}
        />

        <div className="relative flex items-center justify-center w-full h-full">
          <span
            className="badgeText font-black text-center select-none"
            style={{
              color: '#78350f',
              textShadow: '0 0.5px 1px rgba(254, 243, 199, 0.6), 0 1px 0 rgba(0, 0, 0, 0.15)',
              letterSpacing: '0.2px',
              lineHeight: 1,
              fontSize: '9px',
            }}
          >
            $FUZZ
          </span>
        </div>
      </div>
    </div>
  );
}
