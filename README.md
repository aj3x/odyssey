# The Odyssey of Accessibility

An interactive educational experience that teaches web accessibility principles through immersive, mythological trials.

## 📖 Overview

This project simulates common accessibility barriers that real users face:

- **The Sirens** — Experience information loss without captions (audio accessibility)
- **Medusa's Gaze** — Navigate without sight using only a screen reader (visual accessibility)
- **Scylla & Charybdis** — Complete tasks with only keyboard navigation (motor accessibility)
- **The Cyclops** — Read content with low contrast and color-only indicators (visual accessibility)
- **Ithaca** — Learn best practices and real-world solutions

## 🚀 Getting Started

### Prerequisites
- Node.js 14+ and npm/yarn

### Installation

```bash
# Clone the repository
git clone <repo-url> odyssey
cd odyssey

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will open at `http://localhost:3000`

### Building for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
odyssey/
├── public/
│   └── index.html          # Main HTML entry point
├── src/
│   ├── components/
│   │   ├── trials/
│   │   │   ├── SirensTrial.jsx    # Audio accessibility trial
│   │   │   ├── MedusaTrial.jsx    # Screen reader trial
│   │   │   ├── ScyllaTrial.jsx    # Keyboard navigation trial
│   │   │   ├── CyclopsTrial.jsx   # Low vision/color trial
│   │   │   └── Ithaca.jsx         # Summary & resources
│   │   ├── Navigation.jsx         # Top navigation component
│   │   └── HomeScreen.jsx         # Landing page
│   ├── constants/
│   │   └── trials.js              # Trial metadata & constants
│   ├── styles/
│   │   └── sharedStyles.js        # Shared design tokens & styles
│   ├── App.jsx                    # Main app component
│   └── index.js                   # React entry point
├── package.json
├── vite.config.js
├── .gitignore
└── README.md
```

## 🏗️ Architecture

### Component Hierarchy

```
App
├── Navigation
├── HomeScreen
└── Trial Components
    ├── SirensTrial
    ├── MedusaTrial
    ├── ScyllaTrial
    ├── CyclopsTrial
    └── Ithaca
```

### Styling Approach

- **Centralized styles** in `src/styles/sharedStyles.js` for consistency
- **Inline styles** for component-specific variations
- **CSS variables** via Google Fonts for typography
- **Color palette**: Gold (#D4A857) accent on dark background (#12100e)

### State Management

- Local component state via `useState` for trial phases and progress
- No external state management (kept simple for educational clarity)

## 🎨 Key Features

- **Interactive trials** that simulate real accessibility barriers
- **Educational content** explaining WCAG 2.1 AA standards
- **Screen reader simulation** in the Medusa trial
- **Responsive design** for various screen sizes
- **Accessible navigation** with visual indicators

## 📚 WCAG Principles Covered

- **1.2**: Captions & Audio Descriptions (Sirens trial)
- **1.3 & 1.4**: Semantics & Contrast (Medusa & Cyclops trials)
- **2.1**: Keyboard Accessibility (Scylla trial)
- **2.4**: Navigation & Focus (All trials)
- **4.1**: Robust & Compatible (All components)

## 🛠️ Development

### Code Organization

- **Components**: React functional components with hooks
- **Constants**: Static data and trial metadata
- **Styles**: Pure JS objects for consistency and reusability
- **No external CSS**: All styling is component-scoped via inline objects

### Adding a New Trial

1. Create a new component in `src/components/trials/NewTrial.jsx`
2. Add trial metadata to `src/constants/trials.js`
3. Import and render in `src/App.jsx`
4. Update navigation to include the new trial

## 📖 Resources

- [WCAG 2.1 Specification](https://www.w3.org/TR/WCAG21/)
- [WebAIM Checklist](https://webaim.org/standards/wcag/checklist)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [Google Chrome DevTools Accessibility Audit](https://developer.chrome.com/docs/devtools/accessibility/reference)

## 💡 Learning Outcomes

After completing this experience, users will understand:

- Why accessibility isn't optional—it's a basic human right
- Real barriers faced by 1 in 4 adults in the US
- Practical WCAG standards and how to implement them
- The "curb cut effect"—how accessibility benefits everyone

## 📝 License

MIT

---

**Built to demonstrate that accessibility is not a feature, it's a foundation.**
