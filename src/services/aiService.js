/**
 * Rabbit Hole AI Service Layer
 * Clean architecture ready for OpenAI / Gemini / custom LLM endpoint integration.
 * Currently provides robust, intelligent simulated discovery and dynamic concept synthesis.
 */

import { TOPICS_DATA } from '../data/topics';

class AIService {
  constructor() {
    this.apiKey = null; // Can be wired to import.meta.env.VITE_AI_API_KEY later
  }

  /**
   * Fetch topic data or procedurally synthesize a realistic knowledge profile for any query
   */
  async getTopicDetails(topicQuery) {
    // Simulate brief network / AI reasoning latency for realistic feel
    await new Promise((resolve) => setTimeout(resolve, 200));

    if (!topicQuery) return null;

    const normalizedQuery = topicQuery.toLowerCase().trim().replace(/\s+/g, '-');

    // 1. Direct match in local knowledge base
    if (TOPICS_DATA[normalizedQuery]) {
      return { ...TOPICS_DATA[normalizedQuery], isSynthetic: false };
    }

    // 2. Substring match
    const foundKey = Object.keys(TOPICS_DATA).find(
      (key) =>
        key.includes(normalizedQuery) ||
        TOPICS_DATA[key].title.toLowerCase().includes(topicQuery.toLowerCase())
    );

    if (foundKey) {
      return { ...TOPICS_DATA[foundKey], isSynthetic: false };
    }

    // 3. AI Dynamic Procedural Synthesis for any arbitrary concept!
    // This guarantees the Rabbit Hole NEVER dead-ends for the user.
    const titleFormatted = topicQuery
      .split(/[-_ ]+/)
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');

    return {
      id: normalizedQuery,
      title: titleFormatted,
      category: 'Emerging Concept',
      shortDescription: `An intriguing domain of knowledge exploring the dynamics, principles, and systemic connections of ${titleFormatted}.`,
      difficulty: 'Intermediate',
      readTime: '3 min',
      icon: 'Sparkles',
      whyItMatters: `${titleFormatted} bridges critical gaps in modern scientific inquiry, accelerating how we synthesize new patterns and unlock deeper comprehension.`,
      howItWorks: `It operates by establishing feedback loops, structured abstraction layers, and foundational principles that map directly to systemic complexity.`,
      realWorldApplications: [
        `Next-generation optimization and automated workflow modeling`,
        `Cross-disciplinary research in applied science and technology`,
        `Advanced algorithmic systems and empirical verification`,
        `Interactive problem solving in dynamic environments`
      ],
      rabbitHolePath: [
        titleFormatted,
        `Foundations of ${titleFormatted}`,
        `Applied Methodologies`,
        `Advanced Frontiers`,
        `Cross-Disciplinary Horizons`
      ],
      connectedConcepts: [
        {
          id: `${normalizedQuery}-foundations`,
          title: `Foundations of ${titleFormatted}`,
          description: `Core theoretical premises and historical origins.`,
          difficulty: 'Beginner'
        },
        {
          id: `${normalizedQuery}-systems`,
          title: `Systemic Architectures`,
          description: `How ${titleFormatted} interfaces with interconnected digital technologies.`,
          difficulty: 'Intermediate'
        },
        {
          id: 'artificial-intelligence',
          title: 'Artificial Intelligence',
          description: 'Augmenting discovery and pattern recognition across domains.',
          difficulty: 'Beginner'
        },
        {
          id: 'quantum-computing',
          title: 'Quantum Computing',
          description: 'Harnessing fundamental physics for exponential speedups.',
          difficulty: 'Advanced'
        }
      ],
      graphConnections: ['artificial-intelligence', 'machine-learning', 'data-science'],
      isSynthetic: true,
      quiz: {
        question: `What is the primary driving principle behind ${titleFormatted}?`,
        options: [
          'Iterative discovery through structural feedback and empirical validation',
          'Static unchangeable rules etched in stone',
          'Elimination of all curiosity and questioning',
          'Pure random chance without pattern'
        ],
        correctIndex: 0,
        explanation: 'Deep exploration always relies on systematic feedback loops and iterative empirical testing.'
      }
    };
  }

  /**
   * Search knowledge base with fuzzy ranking
   */
  async searchTopics(query, category = 'All') {
    await new Promise((resolve) => setTimeout(resolve, 80));

    const cleanQuery = (query || '').toLowerCase().trim();
    const allTopics = Object.values(TOPICS_DATA);

    return allTopics.filter((topic) => {
      const matchesCategory = category === 'All' || topic.category === category;
      if (!matchesCategory) return false;

      if (!cleanQuery) return true;

      const titleMatch = topic.title.toLowerCase().includes(cleanQuery);
      const descMatch = topic.shortDescription.toLowerCase().includes(cleanQuery);
      const catMatch = topic.category.toLowerCase().includes(cleanQuery);
      const connectedMatch = topic.connectedConcepts?.some((c) =>
        c.title.toLowerCase().includes(cleanQuery)
      );

      return titleMatch || descMatch || catMatch || connectedMatch;
    });
  }

  /**
   * Serendipitous Random Rabbit Hole Generator
   */
  getRandomRabbitHole() {
    const keys = Object.keys(TOPICS_DATA);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return TOPICS_DATA[randomKey];
  }

  /**
   * Generate next deeper level concepts dynamically
   */
  async getNextDeeperNode(currentTopicId, currentDepth = 1) {
    const topic = await this.getTopicDetails(currentTopicId);
    if (!topic || !topic.connectedConcepts || topic.connectedConcepts.length === 0) {
      return null;
    }

    // Pick a connected concept that takes them deeper
    const nextConcept = topic.connectedConcepts[currentDepth % topic.connectedConcepts.length];
    return this.getTopicDetails(nextConcept.id);
  }
}

export const aiService = new AIService();
export default aiService;
