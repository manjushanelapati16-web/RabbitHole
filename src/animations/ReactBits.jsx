import React, { useEffect, useState, useRef } from 'react';

/**
 * React Bits - SplitText Component
 * Animates text character by character or word by word with staggered delay
 */
export function SplitText({
  text = '',
  className = '',
  delay = 35,
  animationFrom = { opacity: 0, transform: 'translateY(24px)' },
  animationTo = { opacity: 1, transform: 'translateY(0px)' },
  splitBy = 'words', // 'words' or 'chars'
  onComplete
}) {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const items = splitBy === 'words' ? text.split(' ') : text.split('');

  return (
    <span ref={ref} className={`react-bits-split-text ${className}`} style={{ display: 'inline-block' }}>
      {items.map((item, index) => (
        <span
          key={index}
          style={{
            display: 'inline-block',
            transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${index * delay}ms`,
            opacity: inView ? animationTo.opacity : animationFrom.opacity,
            transform: inView ? animationTo.transform : animationFrom.transform,
            marginRight: splitBy === 'words' ? '0.3em' : '0.02em',
            whiteSpace: 'pre'
          }}
        >
          {item}
        </span>
      ))}
    </span>
  );
}

/**
 * React Bits - BlurText Component
 * Unblurs and translates text into view
 */
export function BlurText({
  text = '',
  className = '',
  delay = 50,
  animateBy = 'words',
  direction = 'top'
}) {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const elements = animateBy === 'words' ? text.split(' ') : text.split('');

  const getInitialTransform = () => {
    switch (direction) {
      case 'top': return 'translateY(-18px)';
      case 'bottom': return 'translateY(18px)';
      default: return 'translateY(0)';
    }
  };

  return (
    <span ref={ref} className={`react-bits-blur-text ${className}`} style={{ display: 'inline-block' }}>
      {elements.map((el, i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * delay}ms`,
            filter: inView ? 'blur(0px)' : 'blur(10px)',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : getInitialTransform(),
            marginRight: animateBy === 'words' ? '0.28em' : '0'
          }}
        >
          {el}
        </span>
      ))}
    </span>
  );
}

/**
 * React Bits - ScrollReveal Component
 * Smooth reveal wrapper for cards, sections, and grids
 */
export function ScrollReveal({
  children,
  className = '',
  threshold = 0.12,
  delay = 0,
  yOffset = 28,
  duration = 0.6
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`react-bits-scroll-reveal ${className}`}
      style={{
        transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) scale(1)' : `translateY(${yOffset}px) scale(0.98)`,
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
}

/**
 * React Bits - ShinyText Component
 * Gives a subtle luminous sweep across highlighted text
 */
export function ShinyText({
  text,
  disabled = false,
  speed = 4,
  className = ''
}) {
  return (
    <span
      className={`react-bits-shiny-text ${className}`}
      style={{
        background: disabled
          ? 'inherit'
          : 'linear-gradient(120deg, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 70%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        animation: disabled ? 'none' : `shine ${speed}s linear infinite`,
        display: 'inline-block'
      }}
    >
      {text}
      <style>{`
        @keyframes shine {
          0% { background-position: 100% }
          100% { background-position: -100% }
        }
      `}</style>
    </span>
  );
}

/**
 * React Bits - WordRotator Component
 * Seamlessly rotates through inspiring topics
 */
export function WordRotator({
  words = [],
  interval = 2800,
  className = ''
}) {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (words.length <= 1) return;
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setFade(true);
      }, 300);
    }, interval);

    return () => clearInterval(timer);
  }, [words, interval]);

  return (
    <span
      className={`react-bits-word-rotator ${className}`}
      style={{
        display: 'inline-block',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        opacity: fade ? 1 : 0,
        transform: fade ? 'translateY(0)' : 'translateY(10px)',
        color: 'var(--pink-raspberry)',
        fontWeight: 800
      }}
    >
      {words[index] || ''}
    </span>
  );
}
