import React, { useState } from 'react';
import { User, Mail, Lock, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import Logo from '../components/Logo';
import { useAuth } from '../context/AuthContext';

export default function SignUpPage({ setActivePage }) {
  const { signup } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    signup(name, email, password);
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
          maxWidth: '560px',
          borderRadius: 'var(--radius-xl)',
          padding: '44px',
          background: 'var(--bg-card)',
          boxShadow: 'var(--shadow-lg)'
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <Logo size="md" showText={true} className="justify-center" />
          <h2 style={{ fontSize: '1.9rem', marginTop: '16px', color: 'var(--text-primary)' }}>
            Create Your Rabbit Hole
          </h2>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
            Start mapping your curiosity across thousands of connected ideas.
          </p>
        </div>

        {error && (
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
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="uiverse-form-group">
            <label className="uiverse-form-label">Full Name</label>
            <div style={{ position: 'relative' }}>
              <User size={18} className="uiverse-input-icon" />
              <input
                type="text"
                className="uiverse-input"
                placeholder="Ada Lovelace"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="uiverse-form-group">
            <label className="uiverse-form-label">Email Address</label>
            <div style={{ position: 'relative' }}>
              <Mail size={18} className="uiverse-input-icon" />
              <input
                type="email"
                className="uiverse-input"
                placeholder="ada@curiosity.io"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="uiverse-form-group">
            <label className="uiverse-form-label">Password</label>
            <div style={{ position: 'relative' }}>
              <Lock size={18} className="uiverse-input-icon" />
              <input
                type="password"
                className="uiverse-input"
                placeholder="Create a strong password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div className="uiverse-form-group">
            <label className="uiverse-form-label">Confirm Password</label>
            <div style={{ position: 'relative' }}>
              <Lock size={18} className="uiverse-input-icon" />
              <input
                type="password"
                className="uiverse-input"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="btn-uiverse-primary"
            style={{ width: '100%', padding: '14px', marginBottom: '20px' }}
          >
            <span>Start My Journey</span>
            <ArrowRight size={16} />
          </button>

          {/* Switch to SignIn */}
          <div style={{ textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Already have an account?{' '}
            <button
              type="button"
              onClick={() => setActivePage('signin')}
              style={{
                color: 'var(--pink-raspberry)',
                fontWeight: 700,
                textDecoration: 'underline'
              }}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
