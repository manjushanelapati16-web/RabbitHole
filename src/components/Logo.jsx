import React from 'react';

export default function Logo({ size = 'md', showText = true, className = '' }) {
  const iconSize = size === 'sm' ? 32 : size === 'lg' ? 52 : 40;
  const fontSize = size === 'sm' ? '1.15rem' : size === 'lg' ? '1.75rem' : '1.35rem';

  return (
    <div
      className={`rabbit-hole-logo-brand ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '12px',
        userSelect: 'none',
        cursor: 'pointer'
      }}
    >
      <div
        className="logo-icon-wrapper"
        style={{
          width: iconSize,
          height: iconSize,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logoSkyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#74BDE3" />
              <stop offset="100%" stopColor="#4F91C7" />
            </linearGradient>
            <linearGradient id="logoPinkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E8A4BA" />
              <stop offset="100%" stopColor="#B72C5E" />
            </linearGradient>
          </defs>

          {/* Depth concentric rings (the hole) */}
          <ellipse cx="50" cy="56" rx="42" ry="32" fill="url(#logoSkyGrad)" opacity="0.18" />
          <ellipse cx="50" cy="56" rx="33" ry="25" fill="url(#logoSkyGrad)" opacity="0.32" />
          <ellipse cx="50" cy="56" rx="24" ry="18" fill="url(#logoSkyGrad)" opacity="0.65" />
          <ellipse cx="50" cy="56" rx="16" ry="12" fill="#4F91C7" />
          <ellipse cx="50" cy="56" rx="9" ry="7" fill="#243B53" />

          {/* Left Ear */}
          <path
            d="M 38 52 C 32 36, 28 16, 37 10 C 44 4, 46 20, 44 46 Z"
            fill="url(#logoSkyGrad)"
          />
          <path
            d="M 38 46 C 35 32, 32 18, 37 14 C 41 10, 43 20, 41 42 Z"
            fill="url(#logoPinkGrad)"
            opacity="0.9"
          />

          {/* Right Ear */}
          <path
            d="M 52 46 C 50 22, 53 8, 61 12 C 68 16, 64 32, 58 50 Z"
            fill="url(#logoSkyGrad)"
          />
          <path
            d="M 54 42 C 53 24, 55 15, 60 18 C 64 21, 62 32, 57 44 Z"
            fill="url(#logoPinkGrad)"
            opacity="0.9"
          />

          {/* Curiosity Sparkle */}
          <path
            d="M 70 24 Q 74 24 74 20 Q 74 24 78 24 Q 74 24 74 28 Q 74 24 70 24 Z"
            fill="#B72C5E"
          />
          <circle cx="26" cy="38" r="2" fill="#E8A4BA" />
        </svg>
      </div>

      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: fontSize,
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: 'var(--text-primary)',
              lineHeight: 1.1
            }}
          >
            RABBIT <span style={{ color: 'var(--pink-raspberry)' }}>HOLE</span>
          </span>
          <span
            style={{
              fontSize: '0.68rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--blue-deep)',
              lineHeight: 1
            }}
          >
            Map of Curiosity
          </span>
        </div>
      )}
    </div>
  );
}
