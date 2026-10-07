import React from 'react';
import Logo, { RabbitHoleEmblem } from './Logo';
import { Sparkles, Heart } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Footer({ setActivePage }) {
  const { isDark } = useTheme();

  const handlePageClick = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="rabbit-hole-unified-footer"
      style={{
        position: 'relative',
        overflow: 'hidden',
        marginTop: '80px',
        borderTop: '1px solid var(--border-color)',
        background: isDark
          ? 'linear-gradient(145deg, #0C161D 0%, #101C24 45%, #152631 100%)'
          : 'linear-gradient(145deg, #F4FAFB 0%, #E8F4FA 50%, #F0F8FC 100%)',
        padding: '72px 0 36px 0',
        zIndex: 10
      }}
    >
      {/* ============================================================
          1. UNIFIED BACKGROUND COMPOSITION WITH LARGE RABBIT HOLE ARTWORK
          ============================================================ */}
      <div
        className="footer-environment-backdrop"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
          zIndex: 0
        }}
        aria-hidden="true"
      >
        {/* Soft Organic Atmospheric Blue Glow */}
        <div
          style={{
            position: 'absolute',
            top: '-15%',
            right: '0%',
            width: '650px',
            height: '650px',
            borderRadius: '50%',
            background: isDark
              ? 'radial-gradient(circle, rgba(116, 189, 227, 0.22) 0%, rgba(79, 145, 199, 0.08) 50%, transparent 72%)'
              : 'radial-gradient(circle, rgba(116, 189, 227, 0.38) 0%, rgba(107, 169, 214, 0.15) 55%, transparent 75%)',
            filter: 'blur(55px)'
          }}
        />

        {/* Soft Organic Raspberry / Soft Pink Ambient Glow */}
        <div
          style={{
            position: 'absolute',
            bottom: '-20%',
            left: '10%',
            width: '520px',
            height: '520px',
            borderRadius: '50%',
            background: isDark
              ? 'radial-gradient(circle, rgba(212, 90, 126, 0.12) 0%, rgba(183, 44, 94, 0.03) 50%, transparent 70%)'
              : 'radial-gradient(circle, rgba(183, 44, 94, 0.12) 0%, rgba(232, 164, 186, 0.05) 50%, transparent 75%)',
            filter: 'blur(65px)'
          }}
        />

        {/* Geometric Rabbit Hole Depth Contour Arcs */}
        <svg
          style={{
            position: 'absolute',
            right: '-100px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '600px',
            height: '600px',
            opacity: isDark ? 0.14 : 0.18
          }}
          viewBox="0 0 600 600"
          fill="none"
        >
          <circle cx="300" cy="300" r="280" stroke="var(--blue-sky)" strokeWidth="2" strokeDasharray="8 12" />
          <circle cx="300" cy="300" r="210" stroke="var(--blue-deep)" strokeWidth="1.5" />
          <circle cx="300" cy="300" r="140" stroke="var(--pink-soft)" strokeWidth="1.5" strokeDasharray="4 8" />
        </svg>

        {/* LARGE RABBIT HOLE ARTWORK INTEGRATED INTO THE BACKGROUND
            - Clearly visible in both Light and Dark mode
            - Large, non-distorted, partially cropped beyond boundaries
            - Part of the environment, NOT a card
        */}
        <div
          className="footer-large-rabbit-artwork"
          style={{
            position: 'absolute',
            right: '-50px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '480px',
            height: '480px',
            opacity: isDark ? 0.78 : 0.88,
            userSelect: 'none',
            pointerEvents: 'none',
            filter: isDark
              ? 'drop-shadow(0 0 35px rgba(116, 189, 227, 0.2))'
              : 'drop-shadow(0 10px 30px rgba(79, 145, 199, 0.22))',
            transition: 'opacity 0.4s ease'
          }}
        >
          <RabbitHoleEmblem size={480} />
        </div>
      </div>

      {/* ============================================================
          2. FOREGROUND CONTENT LAYER (Clean, readable, layered over background)
          ============================================================ */}
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '48px',
            marginBottom: '52px'
          }}
        >
          {/* LEFT AREA: Brand & Mission */}
          <div style={{ maxWidth: '360px' }}>
            <div onClick={() => handlePageClick('home')} style={{ marginBottom: '16px', display: 'inline-block' }}>
              <Logo size="md" />
            </div>
            <p
              style={{
                fontSize: '0.94rem',
                lineHeight: '1.65',
                marginBottom: '20px',
                color: 'var(--text-primary)',
                fontWeight: 450
              }}
            >
              An interactive map of curiosity. Search an idea, discover connected concepts, and fall deeper down the Rabbit Hole.
            </p>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '7px 16px',
                background: isDark ? 'rgba(27, 48, 60, 0.75)' : 'rgba(255, 255, 255, 0.85)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--border-color)',
                fontSize: '0.82rem',
                fontWeight: 700,
                color: 'var(--pink-raspberry)',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <Sparkles size={14} />
              <span>Curiosity has no bottom</span>
            </div>
          </div>

          {/* MIDDLE AREA: Explore Horizons */}
          <div>
            <h4
              style={{
                fontSize: '1.05rem',
                fontWeight: 700,
                marginBottom: '20px',
                color: 'var(--text-primary)',
                letterSpacing: '-0.01em'
              }}
            >
              Explore Horizons
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li>
                <button
                  onClick={() => handlePageClick('explore')}
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.92rem',
                    fontWeight: 500,
                    transition: 'color var(--transition-fast)',
                    textAlign: 'left'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--blue-deep)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  Topic Directory
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('graph')}
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.92rem',
                    fontWeight: 500,
                    transition: 'color var(--transition-fast)',
                    textAlign: 'left'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--blue-deep)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  Interactive Knowledge Graph
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('journey')}
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.92rem',
                    fontWeight: 500,
                    transition: 'color var(--transition-fast)',
                    textAlign: 'left'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--blue-deep)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  My Exploration Path
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('progress')}
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.92rem',
                    fontWeight: 500,
                    transition: 'color var(--transition-fast)',
                    textAlign: 'left'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--blue-deep)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  Badges & XP Progress
                </button>
              </li>
            </ul>
          </div>

          {/* RIGHT/MIDDLE AREA: Popular Trails */}
          <div>
            <h4
              style={{
                fontSize: '1.05rem',
                fontWeight: 700,
                marginBottom: '20px',
                color: 'var(--text-primary)',
                letterSpacing: '-0.01em'
              }}
            >
              Popular Trails
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.92rem',
                  fontWeight: 500,
                  lineHeight: '1.4'
                }}
              >
                Machine Learning → Supervised Learning
              </li>
              <li
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.92rem',
                  fontWeight: 500,
                  lineHeight: '1.4'
                }}
              >
                Neural Networks → CNN → Computer Vision
              </li>
              <li
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.92rem',
                  fontWeight: 500,
                  lineHeight: '1.4'
                }}
              >
                Transformers → Generative AI
              </li>
              <li
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.92rem',
                  fontWeight: 500,
                  lineHeight: '1.4'
                }}
              >
                Quantum Computing → Superposition
              </li>
            </ul>
          </div>
        </div>

        {/* ============================================================
            3. COPYRIGHT BOTTOM BAR (Part of the same rectangular composition)
            ============================================================ */}
        <div
          style={{
            paddingTop: '24px',
            borderTop: '1px solid var(--border-color)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            fontSize: '0.88rem',
            color: 'var(--text-secondary)'
          }}
        >
          <div>
            © 2026 Rabbit Hole Platform. Designed for curious minds.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Crafted with</span>
            <Heart size={14} color="#B72C5E" fill="#B72C5E" />
            <span>and pure curiosity</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
