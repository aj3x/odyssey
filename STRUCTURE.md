# Odyssey Project Structure Guide

This document explains the refactored project organization and best practices.

## 📁 Directory Structure

```
odyssey/
├── public/
│   └── index.html                 # Static HTML entry point
├── src/
│   ├── components/                # React components
│   │   ├── trials/                # Trial components (each isolated)
│   │   │   ├── SirensTrial.jsx    # Audio/caption accessibility
│   │   │   ├── MedusaTrial.jsx    # Screen reader accessibility
│   │   │   ├── ScyllaTrial.jsx    # Keyboard navigation
│   │   │   ├── CyclopsTrial.jsx   # Low vision/color accessibility
│   │   │   └── Ithaca.jsx         # Final lesson & resources
│   │   ├── HomeScreen.jsx         # Landing page component
│   │   ├── Navigation.jsx         # Top navigation/progress bar
│   │   └── index.js               # Barrel export for clean imports
│   ├── constants/                 # Static data & configuration
│   │   ├── trials.js              # Trial metadata, TRIALS enum, TRIAL_ORDER array
│   │   └── index.js               # Barrel export
│   ├── styles/                    # Centralized design tokens
│   │   ├── sharedStyles.js        # All shared style objects
│   │   └── index.js               # Barrel export
│   ├── App.jsx                    # Main app component (orchestration)
│   └── index.js                   # React entry point
├── .eslintrc.json                 # ESLint configuration
├── .gitignore                     # Git ignore patterns
├── package.json                   # Project dependencies & scripts
├── README.md                       # Project documentation
├── vite.config.js                 # Vite build configuration
└── odyssey-trials.jsx             # Original monolithic file (archive)
```

## 🎯 Design Principles

### 1. **Component Separation**

Each trial is a self-contained component with:
- Independent state management
- Clear props interface (none—each manages itself)
- Own phase/flow logic
- No side effects on other components

**Benefits:**
- Easier testing and maintenance
- Clear responsibility per file
- Simple to modify or remove trials

### 2. **Centralized Styles**

All design tokens live in `src/styles/sharedStyles.js`:
- Button styles (`btnGold`)
- Input styles (`inputStyle`)
- Typography (`headingStyle`, `subtitleStyle`)
- Layout (`containerStyle`, `contentStyle`)
- Card patterns (`lessonCard`, `trialSection`)

**Benefits:**
- Single source of truth for design
- Easy brand updates
- Consistency across trials
- No CSS file management

### 3. **Constants & Metadata**

`src/constants/trials.js` contains:
- `TRIALS` enum (home, sirens, medusa, scylla, cyclops, ithaca)
- `TRIAL_ORDER` array (correct sequence)
- `TRIAL_METADATA` array (emoji, name, description per trial)

**Benefits:**
- No magic strings in components
- Data-driven UI (HomeScreen auto-generates trial cards)
- Single point to update trial info

### 4. **Barrel Exports**

Each directory has an `index.js` that re-exports its contents:
- `src/components/index.js` exports all components
- `src/styles/index.js` exports all styles
- `src/constants/index.js` exports all constants

**Benefits:**
- Clean imports: `import { btnGold } from '../styles'`
- No deep path imports
- Easy refactoring (move files without breaking imports)

---

## 🔄 Data Flow

```
App.jsx (state: current trial)
  ↓
  ├→ Navigation (display progress, allow jumping trials)
  ├→ HomeScreen (display intro, start trial)
  └→ Trial Component (SirensTrial, MedusaTrial, etc.)
       ├ Constants (metadata, styling)
       └ Styles (sharedStyles imported)
```

**State Management:** 
- Minimal: just `current` trial in App
- Each trial manages its own phase/answers internally
- No prop drilling

---

## 📝 Adding New Content

### Add a New Trial

1. **Create the component:**
   ```jsx
   // src/components/trials/NewTrial.jsx
   import { useState } from 'react';
   import { btnGold, headingStyle } from '../../styles';

   export default function NewTrial() {
     const [phase, setPhase] = useState('intro');
     // ... component code
   }
   ```

2. **Update constants:**
   ```js
   // src/constants/trials.js
   export const TRIALS = {
     // ... existing
     newTrial: 'newTrial',
   };

   export const TRIAL_ORDER = [
     // ... existing
     TRIALS.newTrial,
   ];

   export const TRIAL_METADATA = [
     // ... existing
     {
       emoji: '🆕',
       name: 'The New Trial',
       desc: 'Description here',
       trialKey: TRIALS.newTrial,
     },
   ];
   ```

3. **Import in App.jsx:**
   ```jsx
   import NewTrial from './components/trials/NewTrial';

   // In render:
   {current === TRIALS.newTrial && <NewTrial />}
   ```

4. **Update Navigation and HomeScreen automatically** (they use the constants and metadata arrays)

### Add New Shared Styles

1. Add to `src/styles/sharedStyles.js`:
   ```js
   export const myNewStyle = {
     color: '#D4A857',
     // ...
   };
   ```

2. Import anywhere:
   ```js
   import { myNewStyle } from '../../styles';
   ```

---

## 🚀 Build & Deploy

### Development
```bash
npm install
npm run dev        # Runs on localhost:3000
```

### Production
```bash
npm run build      # Creates dist/
npm run preview    # Preview production build
```

### Deploy
- **Netlify/Vercel**: Connect this repo, they auto-detect Vite
- **Traditional hosting**: Upload contents of `dist/` folder
- **Environment**: This is client-side only (no server needed)

---

## ✅ Best Practices in This Project

### ✓ **Component Organization**
- Small, focused components (each trial is ~200-400 lines)
- Single responsibility per file
- Easy to locate and modify

### ✓ **Naming Conventions**
- Components: PascalCase (`SirensTrial.jsx`)
- Constants: UPPER_CASE (`TRIALS`, `TRIAL_ORDER`)
- Styles: camelCase (`btnGold`, `lessonCard`)
- Utilities: camelCase functions

### ✓ **No Build Complexity**
- Vite for fast dev/build (zero config needed)
- No CSS-in-JS library (plain objects)
- React 18 + hooks (modern, simple)
- No TypeScript (keeps it simple for education)

### ✓ **Accessibility in Code**
- Semantic HTML in components
- Icon use with `aria-label` for buttons
- Keyboard event handling
- Focus management where needed
- Proper form labels

---

## 🔧 Troubleshooting

### Port 3000 already in use?
Edit `vite.config.js` and change `port: 3000` to another number.

### Styles not updating?
Import from the correct path: `'../../styles'` not `'../../styles/sharedStyles'` (use barrel export).

### New trial not showing up?
Make sure you:
1. Added trial key to `TRIALS`
2. Added to `TRIAL_ORDER` array
3. Added to `TRIAL_METADATA` array
4. Imported component in `App.jsx`
5. Added conditional render in `App.jsx`

---

## 📚 Resources for Contributors

- **React Hooks**: https://react.dev/reference/react/hooks
- **Vite Docs**: https://vitejs.dev/
- **WCAG 2.1**: https://www.w3.org/TR/WCAG21/
- **Web Accessibility**: https://www.a11y-101.com/

---

**This structure prioritizes clarity, maintainability, and scalability.**
