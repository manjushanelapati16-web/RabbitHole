import React from 'react';
import Logo from './Logo';
import { Sparkles, Compass, Heart, Globe, Share2, Layers } from 'lucide-react';

export default function Footer({ setActivePage }) {
  const handlePageClick = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-color)',
        background: 'var(--bg-secondary)',
        padding: '64px 0 32px 0',
        marginTop: '80px',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '40px',
            marginBottom: '48px'
          }}
        >
          {/* Brand Col */}
          <div style={{ maxWidth: '320px' }}>
            <div onClick={() => handlePageClick('home')} style={{ marginBottom: '16px' }}>
              <Logo size="md" />
            </div>
            <p style={{ fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '20px' }}>
              An interactive map of curiosity. Search an idea, discover connected concepts, and fall deeper down the Rabbit Hole.
            </p>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                background: 'var(--bg-card)',
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--border-color)',
                fontSize: '0.8rem',
                fontWeight: 600,
                color: 'var(--pink-raspberry)'
              }}
            >
              <Sparkles size={14} />
              <span>Curiosity has no bottom</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 style={{ fontSize: '1rem', marginBottom: '18px', color: 'var(--text-primary)' }}>
              Explore Horizons
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <button
                  onClick={() => handlePageClick('explore')}
                  style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}
                >
                  Topic Directory
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('graph')}
                  style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}
                >
                  Interactive Knowledge Graph
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('journey')}
                  style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}
                >
                  My Exploration Path
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('progress')}
                  style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}
                >
                  Badges & XP Progress
                </button>
              </li>
            </ul>
          </div>

          {/* Popular Rabbit Holes */}
          <div>
            <h4 style={{ fontSize: '1rem', marginBottom: '18px', color: 'var(--text-primary)' }}>
              Popular Trails
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                Machine Learning → Supervised Learning
              </li>
              <li style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                Neural Networks → CNN → Computer Vision
              </li>
              <li style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                Transformers → Generative AI
              </li>
              <li style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                Quantum Computing → Superposition
              </li>
            </ul>
          </div>

          {/* Architecture info */}
          <div>
            <h4 style={{ fontSize: '1rem', marginBottom: '18px', color: 'var(--text-primary)' }}>
              Engineered With
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              <div>✨ <strong>ThreeUI</strong> WebGL Wavefield</div>
              <div>⚡ <strong>React Bits</strong> Micro-Motions</div>
              <div>🎨 <strong>Uiverse</strong> Interactive Controls</div>
              <div>🧠 <strong>AI Service</strong> Clean Architecture</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '24px',
            borderTop: '1px solid var(--border-color)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            fontSize: '0.85rem',
            color: 'var(--text-muted)'
          }}
        >
          <div>
            © {new Date().getFullYear()} Rabbit Hole Platform. Designed for curious minds.
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
