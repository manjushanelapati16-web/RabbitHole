import React from 'react';

/**
 * Rabbit Hole Circular Branded Illustration Emblem
 * 1:1 Aspect Ratio Vector Logo featuring:
 * - Circular blue background with Rabbit Hole depth rings
 * - White rabbit illustration with soft pink / raspberry accents
 * - Floating curiosity hearts
 * - Integrated Rabbit Hole brand identity
 */
export function RabbitHoleEmblem({ size = 120, className = '' }) {
  return (
    <div
      className={`rabbit-hole-emblem-wrapper ${className}`}
      style={{
        width: size,
        height: size,
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        aspectRatio: '1 / 1',
        userSelect: 'none',
        flexShrink: 0
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%', display: 'block' }}
      >
        <defs>
          {/* Main Blue Circular Gradient */}
          <linearGradient id="emblemSkyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#74BDE3" />
            <stop offset="60%" stopColor="#4F91C7" />
            <stop offset="100%" stopColor="#243B53" />
          </linearGradient>

          {/* Depth Gradient for the Inner Hole */}
          <radialGradient id="emblemHoleGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#101C24" />
            <stop offset="60%" stopColor="#243B53" />
            <stop offset="100%" stopColor="#4F91C7" />
          </radialGradient>

          {/* Raspberry / Pink Accent Gradient */}
          <linearGradient id="emblemPinkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E8A4BA" />
            <stop offset="100%" stopColor="#B72C5E" />
          </linearGradient>

          {/* Soft Shadow / Glow Filter */}
          <filter id="emblemGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#243B53" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Outer Circular Base Container */}
        <circle cx="80" cy="80" r="74" fill="url(#emblemSkyGrad)" />
        <circle cx="80" cy="80" r="74" stroke="#FFFFFF" strokeWidth="2.5" strokeOpacity="0.35" />

        {/* Concentric Rabbit Hole Depth Rings */}
        <ellipse cx="80" cy="98" rx="60" ry="38" fill="url(#emblemSkyGrad)" opacity="0.4" />
        <ellipse cx="80" cy="98" rx="48" ry="30" fill="url(#emblemHoleGrad)" opacity="0.7" />
        <ellipse cx="80" cy="98" rx="36" ry="22" fill="#243B53" opacity="0.9" />
        <ellipse cx="80" cy="98" rx="24" ry="14" fill="#101C24" />

        {/* Floating Raspberry Hearts */}
        {/* Heart 1 - Top Right */}
        <g transform="translate(118, 38) rotate(15) scale(0.9)">
          <path
            d="M 0 0 C -4 -6, -12 -3, -12 4 C -12 10, 0 18, 0 21 C 0 18, 12 10, 12 4 C 12 -3, 4 -6, 0 0 Z"
            fill="#B72C5E"
            filter="drop-shadow(0px 2px 4px rgba(183, 44, 94, 0.4))"
          />
        </g>
        {/* Heart 2 - Top Left Subtle */}
        <g transform="translate(36, 46) rotate(-18) scale(0.65)">
          <path
            d="M 0 0 C -4 -6, -12 -3, -12 4 C -12 10, 0 18, 0 21 C 0 18, 12 10, 12 4 C 12 -3, 4 -6, 0 0 Z"
            fill="#E8A4BA"
            opacity="0.9"
          />
        </g>

        {/* White Rabbit Illustration emerging with curiosity */}
        {/* Rabbit Body / Shoulders */}
        <path
          d="M 52 106 C 52 86, 108 86, 108 106 C 108 112, 52 112, 52 106 Z"
          fill="#FFFFFF"
          opacity="0.95"
        />

        {/* Left Rabbit Ear */}
        <path
          d="M 64 82 C 54 58, 48 26, 62 18 C 72 10, 76 36, 72 74 Z"
          fill="#FFFFFF"
          filter="url(#emblemGlow)"
        />
        <path
          d="M 64 74 C 57 54, 52 32, 62 25 C 67 20, 71 36, 68 68 Z"
          fill="url(#emblemPinkGrad)"
          opacity="0.9"
        />

        {/* Right Rabbit Ear (Playful Tilt) */}
        <path
          d="M 86 74 C 84 36, 88 16, 99 22 C 110 28, 104 54, 96 82 Z"
          fill="#FFFFFF"
          filter="url(#emblemGlow)"
        />
        <path
          d="M 88 68 C 87 40, 90 27, 98 31 C 103 35, 100 52, 93 74 Z"
          fill="url(#emblemPinkGrad)"
          opacity="0.9"
        />

        {/* Rabbit Head */}
        <ellipse cx="80" cy="84" rx="22" ry="18" fill="#FFFFFF" filter="url(#emblemGlow)" />

        {/* Rabbit Cute Cheeks */}
        <ellipse cx="71" cy="87" rx="3.5" ry="2" fill="#E8A4BA" opacity="0.6" />
        <ellipse cx="89" cy="87" rx="3.5" ry="2" fill="#E8A4BA" opacity="0.6" />

        {/* Rabbit Eyes */}
        <ellipse cx="73" cy="82" rx="2.5" ry="3.5" fill="#243B53" />
        <circle cx="72" cy="80.5" r="1" fill="#FFFFFF" />
        <ellipse cx="87" cy="82" rx="2.5" ry="3.5" fill="#243B53" />
        <circle cx="86" cy="80.5" r="1" fill="#FFFFFF" />

        {/* Rabbit Raspberry Button Nose */}
        <polygon points="80,88 77,85 83,85" fill="#B72C5E" />

        {/* Rabbit Whiskers */}
        <line x1="62" y1="87" x2="52" y2="85" stroke="#D7EAF4" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="62" y1="90" x2="51" y2="91" stroke="#D7EAF4" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="98" y1="87" x2="108" y2="85" stroke="#D7EAF4" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="98" y1="90" x2="109" y2="91" stroke="#D7EAF4" strokeWidth="1.5" strokeLinecap="round" />

        {/* Sparkle of Curiosity */}
        <path
          d="M 126 78 Q 130 78 130 74 Q 130 78 134 78 Q 130 78 130 82 Q 130 78 126 78 Z"
          fill="#FFFFFF"
        />
        <circle cx="28" cy="76" r="2.5" fill="#FFFFFF" opacity="0.8" />
        <circle cx="132" cy="108" r="2" fill="#E8A4BA" opacity="0.9" />

        {/* Bottom Arc Ribbon Branding Banner Text */}
        <path
          id="textCurve"
          d="M 28 128 A 66 66 0 0 0 132 128"
          fill="none"
        />
        <text fill="#FFFFFF" fontSize="9.5" fontWeight="800" letterSpacing="0.18em">
          <textPath href="#textCurve" startOffset="50%" textAnchor="middle">
            RABBIT HOLE
          </textPath>
        </text>
      </svg>
    </div>
  );
}

/**
 * Standard Navbar/Header/General Logo Component
 */
export default function Logo({ size = 'md', showText = true, textColor = null, className = '' }) {
  const iconSize = size === 'sm' ? 32 : size === 'lg' ? 52 : 40;
  const fontSize = size === 'sm' ? '1.15rem' : size === 'lg' ? '1.75rem' : '1.35rem';
  const resolvedTextColor = textColor || 'var(--text-primary)';

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
              color: resolvedTextColor,
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
              color: textColor ? 'rgba(255, 255, 255, 0.85)' : 'var(--blue-deep)',
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
