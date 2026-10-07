# 🐇 RABBIT HOLE — Interactive Knowledge Discovery Platform

> **"An interactive map of curiosity."**  
> Search any topic, understand concepts, and automatically fall deeper down the Rabbit Hole.

---

## 🌟 Overview

**Rabbit Hole** is an interactive knowledge discovery, learning, and conceptual exploration platform. Instead of a traditional linear course or generic AI dashboard, Rabbit Hole turns learning into an exploratory journey:

```text
Machine Learning
       ↓
Supervised Learning
       ↓
Neural Networks
       ↓
CNN
       ↓
Computer Vision
       ↓
Object Detection
```

---

## 🎨 Visual Identity & Palette

Engineered specifically with the Rabbit Hole brand colors:

- **Sky Blue**: `#74BDE3`
- **Medium Blue**: `#6BA9D6`
- **Deep Blue**: `#4F91C7`
- **Raspberry Pink**: `#B72C5E` (Light) / `#D45A7E` (Dark)
- **Soft Pink**: `#E8A4BA`
- **White**: `#FFFFFF`
- **Dark Text**: `#243B53` (Light) / `#F3F8FA` (Dark)
- **Backgrounds**: `#F4FAFB` (Light) / `#101C24` (Dark)

---

## ✨ Integrated Design Stack

1. **ThreeUI WebGL Background** (`src/animations/ThreeBackground.jsx`):
   - Real Three.js WebGL particle wavefield atmosphere with gentle luminous depth, subtle pointer interaction, and light/dark reactivity.
2. **React Bits Micro-Animations** (`src/animations/ReactBits.jsx`):
   - `SplitText`, `BlurText`, `ScrollReveal`, `ShinyText`, and `WordRotator`.
3. **Uiverse Interactive Components** (`src/styles/uiverse.css`):
   - Glowing buttons, search inputs with keyboard shortcut (`⌘K` / `Ctrl+K`), custom toggle switches, filter pills, stat badges, and cards.
4. **AI Service Architecture** (`src/services/aiService.js`):
   - Clean service layer ready for OpenAI / Gemini / custom LLM APIs, featuring fuzzy search and procedural topic synthesis for any query.

---

## 🚀 Key Features & Pages

- **Home Page**:
  - ThreeUI animated hero with React Bits text reveals.
  - Large live search bar with autocomplete & popular chips.
  - Curated **Popular Rabbit Holes**.
  - **Continue Your Rabbit Hole** horizontal trail.
  - **Today's Rabbit Hole** (Daily Discovery inquiry with bonus XP).
  - **How Rabbit Hole Works** 4-step guide.
  - **Interactive Knowledge Graph Preview**.
  - **Your Progress** stats summary & final curiosity CTA.
- **Topic Exploration & Deep Dive Modal**:
  - AI-generated explanation.
  - *"Why does this matter?"*
  - *"How does it work?"*
  - Real-world application tags.
  - **"Continue Down the Rabbit Hole"** connected concepts grid with instant branching.
  - Interactive **Quick Check Quiz** with confetti celebrations & XP rewards.
- **Explore Page**:
  - Category filters (*AI, Computer Science, Cybersecurity, Science, Technology, Robotics, Data Science, Mathematics*).
  - Sorting (*Trending, Popular, Newest, Random*).
- **Knowledge Graph Page**:
  - Medium-sized interactive graph with node selection, connection lines, zoom/pan controls, and side inspector drawer.
- **My Journey Page**:
  - Personalized exploration timeline, active descent chain, saved bookmarks, and expedition logs.
- **Progress Page**:
  - 127 topics explored, 8 completed rabbit holes, 12-day streak, 2,450 XP, level rank, weekly pulse graph, and unlockable achievements (*Curious Mind, Deep Diver, Knowledge Explorer, 7-Day Explorer, First Rabbit Hole*).
- **Sign In & Sign Up Pages**:
  - UI-only authentication with split layout and motivational quotes.
- **Settings Page**:
  - Light/Dark appearance toggle and exploration preferences.

---

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

Visit `http://localhost:5173/` in your browser.

### 3. Build for Production
```bash
npm run build
```

---

## 📁 Project Structure

```text
rabbit-hole/
├── public/
│   └── favicon.svg
├── src/
│   ├── animations/
│   │   ├── ReactBits.jsx
│   │   └── ThreeBackground.jsx
│   ├── components/
│   │   ├── DailyDiscovery.jsx
│   │   ├── Footer.jsx
│   │   ├── KnowledgeGraph.jsx
│   │   ├── Logo.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProgressCard.jsx
│   │   ├── RabbitHolePath.jsx
│   │   ├── ThemeToggle.jsx
│   │   ├── TopicCard.jsx
│   │   ├── TopicDetailModal.jsx
│   │   └── TopicSearch.jsx
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   ├── ExplorationContext.jsx
│   │   └── ThemeContext.jsx
│   ├── data/
│   │   ├── achievements.js
│   │   └── topics.js
│   ├── pages/
│   │   ├── ExplorePage.jsx
│   │   ├── HomePage.jsx
│   │   ├── KnowledgeGraphPage.jsx
│   │   ├── MyJourneyPage.jsx
│   │   ├── ProgressPage.jsx
│   │   ├── SettingsPage.jsx
│   │   ├── SignInPage.jsx
│   │   └── SignUpPage.jsx
│   ├── services/
│   │   └── aiService.js
│   ├── styles/
│   │   ├── index.css
│   │   └── uiverse.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```
