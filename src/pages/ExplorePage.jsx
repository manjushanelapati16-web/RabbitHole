import React, { useState, useEffect } from 'react';
import { Search, Filter, Sparkles, ArrowUpDown, Layers, Compass } from 'lucide-react';
import { CATEGORIES, SORT_OPTIONS, TOPICS_DATA } from '../data/topics';
import TopicCard from '../components/TopicCard';
import { ScrollReveal } from '../animations/ReactBits';
import { useExploration } from '../context/ExplorationContext';

export default function ExplorePage() {
  const { openTopic } = useExploration();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSort, setSelectedSort] = useState('Trending');
  const [filteredTopics, setFilteredTopics] = useState([]);

  useEffect(() => {
    let list = Object.values(TOPICS_DATA);

    // 1. Filter by category
    if (selectedCategory !== 'All') {
      list = list.filter((t) => t.category === selectedCategory);
    }

    // 2. Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.shortDescription.toLowerCase().includes(q) ||
          t.category.toLowerCase().includes(q)
      );
    }

    // 3. Sort
    if (selectedSort === 'Trending') {
      list.sort((a, b) => (b.connectedConcepts?.length || 0) - (a.connectedConcepts?.length || 0));
    } else if (selectedSort === 'Popular') {
      list.sort((a, b) => a.title.localeCompare(b.title));
    } else if (selectedSort === 'Newest') {
      list.reverse();
    } else if (selectedSort === 'Random') {
      list.sort(() => Math.random() - 0.5);
    }

    setFilteredTopics(list);
  }, [searchQuery, selectedCategory, selectedSort]);

  return (
    <div className="explore-page-view section-padding">
      <div className="container">
        {/* Page Header */}
        <div className="section-header" style={{ marginBottom: '36px' }}>
          <span className="section-eyebrow">
            <Compass size={14} color="var(--pink-raspberry)" />
            <span>KNOWLEDGE DIRECTORY</span>
          </span>
          <h1 className="section-title">Explore Rabbit Holes</h1>
          <p className="section-subtitle">
            Search across interconnected fields of science, technology, and mathematics.
          </p>
        </div>

        {/* Large Search Bar */}
        <div style={{ maxWidth: '720px', margin: '0 auto 28px auto' }}>
          <div className="uiverse-search-box">
            <Search size={20} color="var(--blue-deep)" style={{ flexShrink: 0 }} />
            <input
              type="text"
              className="uiverse-search-input"
              placeholder="Search concepts, algorithms, frameworks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search concepts"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  fontSize: '0.8rem',
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--bg-secondary)',
                  color: 'var(--text-muted)'
                }}
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Pills & Sorting Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            marginBottom: '36px',
            paddingBottom: '20px',
            borderBottom: '1px solid var(--border-color)'
          }}
        >
          {/* Category Filter Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              alignItems: 'center'
            }}
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`uiverse-pill ${selectedCategory === cat ? 'active' : ''}`}
                style={{ fontSize: '0.85rem' }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sorting Dropdown */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ArrowUpDown size={16} color="var(--blue-deep)" />
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
              Sort:
            </span>
            <select
              value={selectedSort}
              onChange={(e) => setSelectedSort(e.target.value)}
              style={{
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer',
                outline: 'none'
              }}
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Counter */}
        <div
          style={{
            fontSize: '0.88rem',
            color: 'var(--text-muted)',
            marginBottom: '20px'
          }}
        >
          Showing <strong>{filteredTopics.length}</strong> rabbit holes in <strong>{selectedCategory}</strong>
        </div>

        {/* Topic Cards Grid */}
        {filteredTopics.length > 0 ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px'
            }}
          >
            {filteredTopics.map((topic, index) => (
              <ScrollReveal key={topic.id} delay={index * 50}>
                <TopicCard topic={topic} />
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div
            className="uiverse-card"
            style={{
              padding: '48px',
              textAlign: 'center',
              background: 'var(--bg-card)'
            }}
          >
            <Sparkles size={36} color="var(--pink-raspberry)" style={{ margin: '0 auto 16px auto' }} />
            <h3 style={{ fontSize: '1.4rem', marginBottom: '8px' }}>No exact matches found</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
              Want AI to synthesize a new rabbit hole for "{searchQuery}"?
            </p>
            <button
              onClick={() => openTopic(searchQuery)}
              className="btn-uiverse-raspberry"
            >
              <span>Synthesize "{searchQuery}"</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
