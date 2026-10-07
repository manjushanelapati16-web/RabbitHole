import React, { useState } from 'react';
import { Mail, Lock, Sparkles, ArrowRight, Globe } from 'lucide-react';
import Logo from '../components/Logo';
import { BlurText } from '../animations/ReactBits';
import { useAuth } from '../context/AuthContext';

export default function SignInPage({ setActivePage }) {
  const { login } = useAuth();
  const [email, setEmail] = useState('alex.mercer@curiosity.io');
  const [password, setPassword] = useState('password123');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage('Please fill in both email and password.');
      return;
    }
    login(email, password);
    setActivePage('home');
  };

  return (
    <div
      style={{
        minHeight: 'calc(100vh - var(--nav-height) - 100px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px'
      }}
    >
      <div
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '920px',
          borderRadius: 'var(--radius-xl)',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          boxShadow: 'var(--shadow-lg)'
        }}
      >
        {/* LEFT BRANDING PANEL */}
        <div
          style={{
            background: 'linear-gradient(145deg, #1F3E58 0%, #306C9B 38%, #4F91C7 72%, #B72C5E 100%)',
            padding: '48px',
            color: '#FFFFFF',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div>
            <Logo size="lg" showText={true} textColor="#FFFFFF" />
            <div style={{ marginTop: '36px' }}>
              <span
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  letterSpacing: '0.09em',
                  textTransform: 'uppercase',
                  padding: '5px 14px',
                  borderRadius: 'var(--radius-full)',
                  background: '#FFFFFF',
                  color: '#243B53',
                  boxShadow: '0 2px 10px rgba(16, 28, 36, 0.25)',
                  display: 'inline-block',
                  marginBottom: '18px'
                }}
              >
                DISCOVER THE UNKNOWN
              </span>
              <h2
                style={{
                  fontSize: '2.2rem',
                  lineHeight: '1.25',
                  marginBottom: '16px',
                  color: '#FFFFFF',
                  fontWeight: 800,
                  textShadow: '0 2px 12px rgba(16, 28, 36, 0.45)'
                }}
              >
                "Curiosity has no bottom."
              </h2>
              <p
                style={{
                  fontSize: '1rem',
                  color: '#F4FAFB',
                  opacity: 1,
                  lineHeight: '1.65',
                  textShadow: '0 1px 6px rgba(16, 28, 36, 0.4)',
                  fontWeight: 450
                }}
              >
                Join thousands of explorers building dynamic knowledge trails across artificial intelligence, quantum physics, and computer science.
              </p>
            </div>
          </div>

          <div
            style={{
              paddingTop: '24px',
              borderTop: '1px solid rgba(255, 255, 255, 0.35)',
              fontSize: '0.88rem',
              color: '#FFFFFF',
              opacity: 0.95,
              fontWeight: 500,
              textShadow: '0 1px 4px rgba(16, 28, 36, 0.35)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <span>✨</span>
            <span>Functional UI-only prototype ready for backend connection</span>
          </div>
        </div>

        {/* RIGHT FORM PANEL */}
        <div
          style={{
            background: 'var(--bg-card)',
            padding: '48px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <div style={{ marginBottom: '28px' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '8px', color: 'var(--text-primary)' }}>
              Welcome Back
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Continue your journey down the Rabbit Hole.
            </p>
          </div>

          {errorMessage && (
            <div
              style={{
                padding: '10px 14px',
                borderRadius: 'var(--radius-sm)',
                background: 'var(--pink-light)',
                color: 'var(--pink-raspberry)',
                fontSize: '0.86rem',
                marginBottom: '18px'
              }}
            >
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="uiverse-form-group">
              <label className="uiverse-form-label">Email Address</label>
              <div style={{ position: 'relative' }}>
                <Mail size={18} className="uiverse-input-icon" />
                <input
                  type="email"
                  className="uiverse-input"
                  placeholder="name@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="uiverse-form-group">
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '8px'
                }}
              >
                <label className="uiverse-form-label" style={{ marginBottom: 0 }}>
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => alert('Password reset demonstration')}
                  style={{
                    fontSize: '0.8rem',
                    color: 'var(--pink-raspberry)',
                    fontWeight: 600
                  }}
                >
                  Forgot Password?
                </button>
              </div>
              <div style={{ position: 'relative' }}>
                <Lock size={18} className="uiverse-input-icon" />
                <input
                  type="password"
                  className="uiverse-input"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn-uiverse-primary"
              style={{ width: '100%', padding: '14px', marginBottom: '16px' }}
            >
              <span>Sign In to Journey</span>
              <ArrowRight size={16} />
            </button>

            {/* Google Social Button */}
            <button
              type="button"
              onClick={() => {
                login('google.user@curiosity.io', 'googlePass');
                setActivePage('home');
              }}
              className="btn-uiverse-secondary"
              style={{ width: '100%', padding: '12px', fontSize: '0.92rem', marginBottom: '24px' }}
            >
              <Globe size={18} color="var(--blue-deep)" />
              <span>Continue with Google</span>
            </button>

            {/* Switch to SignUp */}
            <div style={{ textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Don't have an account?{' '}
              <button
                type="button"
                onClick={() => setActivePage('signup')}
                style={{
                  color: 'var(--pink-raspberry)',
                  fontWeight: 700,
                  textDecoration: 'underline'
                }}
              >
                Create one
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
