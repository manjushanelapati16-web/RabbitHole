import React, { useState, useEffect, useRef } from 'react';
import { Search, Sparkles, ArrowRight, CornerDownLeft, Layers } from 'lucide-react';
import { useExploration } from '../context/ExplorationContext';
import { aiService } from '../services/aiService';

export default function TopicSearch({ autoFocus = false, onTopicSelected }) {
  const { openTopic } = useExploration();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  const popularChips = [
    { label: 'Artificial Intelligence', id: 'artificial-intelligence' },
    { label: 'Neural Networks', id: 'neural-networks' },
    { label: 'Computer Vision', id: 'computer-vision' },
    { label: 'Cybersecurity', id: 'cybersecurity' },
    { label: 'Generative AI', id: 'generative-ai' },
    { label: 'Robotics', id: 'robotics' },
    { label: 'Quantum Computing', id: 'quantum-computing' }
  ];

  // Global keyboard shortcut (Cmd/Ctrl + K or /)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Live search debounced
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const timer = setTimeout(async () => {
      setIsSearching(true);
      const matches = await aiService.searchTopics(query);
      setResults(matches);
      setIsOpen(true);
      setIsSearching(false);
    }, 150);

    return () => clearTimeout(timer);
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    const target = results.length > 0 ? results[0].id : query.trim();
    handleSelect(target);
  };

  const handleSelect = (topicId) => {
    setIsOpen(false);
    setQuery('');
    openTopic(topicId);
    if (onTopicSelected) onTopicSelected(topicId);
  };

  return (
    <div ref={containerRef} className="uiverse-search-container">
      <form onSubmit={handleSubmit}>
        <div className="uiverse-search-box">
          <Search size={20} color="var(--blue-deep)" style={{ flexShrink: 0 }} />
          <input
            ref={inputRef}
            type="text"
            className="uiverse-search-input"
            placeholder="Search a topic and start exploring..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => query.trim() && setIsOpen(true)}
            autoFocus={autoFocus}
            aria-label="Search topic in Rabbit Hole"
          />
          <span className="uiverse-kbd-shortcut" title="Keyboard shortcut">
            ⌘K
          </span>
          <button
            type="submit"
            className="uiverse-search-btn"
            disabled={!query.trim()}
            aria-label="Explore topic"
          >
            <span>Explore</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </form>

      {/* Autocomplete / Instant discovery dropdown */}
      {isOpen && (
        <div
          className="glass-panel"
          style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            left: 0,
            right: 0,
            zIndex: 150,
            borderRadius: 'var(--radius-lg)',
            padding: '12px',
            maxHeight: '380px',
            overflowY: 'auto',
            boxShadow: 'var(--shadow-lg)'
          }}
        >
          {results.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: 'var(--text-muted)',
                  padding: '4px 8px'
                }}
              >
                Suggested Knowledge Nodes
              </div>
              {results.slice(0, 5).map((topic) => (
                <div
                  key={topic.id}
                  onClick={() => handleSelect(topic.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px 14px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--blue-sky)';
                    e.currentTarget.style.background = 'var(--bg-secondary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                    e.currentTarget.style.background = 'var(--bg-card)';
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                      {topic.title}
                    </div>
                    <div
                      style={{
                        fontSize: '0.8rem',
                        color: 'var(--text-secondary)',
                        maxWidth: '440px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {topic.shortDescription}
                    </div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '0.78rem',
                      color: 'var(--blue-deep)',
                      fontWeight: 600
                    }}
                  >
                    <span>{topic.connectedConcepts?.length || 4} branches</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div
              onClick={() => handleSelect(query)}
              style={{
                padding: '16px',
                textAlign: 'center',
                cursor: 'pointer',
                background: 'var(--pink-light)',
                borderRadius: 'var(--radius-md)',
                border: '1px dashed var(--pink-soft)'
              }}
            >
              <Sparkles size={20} color="var(--pink-raspberry)" style={{ margin: '0 auto 8px auto' }} />
              <div style={{ fontWeight: 700, color: 'var(--pink-raspberry)' }}>
                Synthesize New Rabbit Hole: "{query}"
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                AI will dynamically construct concepts and branching paths for this discovery.
              </div>
            </div>
          )}
        </div>
      )}

      {/* Popular exploration chips */}
      <div className="uiverse-pills-container">
        {popularChips.map((chip) => (
          <button
            key={chip.id}
            type="button"
            className="uiverse-pill"
            onClick={() => handleSelect(chip.id)}
          >
            <Sparkles size={13} color="var(--pink-raspberry)" />
            <span>{chip.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
