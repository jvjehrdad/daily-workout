# تمرین امروز — Workout Day

A single-page workout application built with React + TypeScript. Displays a daily workout plan with beautiful exercise cards, skeleton loading, lazy image loading, and a detailed exercise view.

## How to Run

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Design Decisions

### Theme
- **Dark background** (`#0D0D0D`) with **passionate orange** (`#FF6B2B`) accent — high contrast, modern fitness aesthetic
- Subtle radial gradient glow at the top for depth
- Orange selection highlight and scrollbar styling

### Typography
- **Vazirmatn** — modern Persian web font with full character support
- RTL-first layout with `dir="rtl"` on `<html>`

### Components
| Component | Purpose |
|-----------|---------|
| `Header` | Day title, focus badge, coach tip card |
| `ExerciseCard` | Exercise image (lazy + skeleton), name, stats, muscle tags, tip |
| `ExerciseDetail` | Bottom-sheet modal with video, muscles, step-by-step instructions |
| `Skeleton` | Shimmer animation placeholders while images load |

### Loading Strategy
- **Skeleton shimmer**: Cards show animated placeholders for ~800ms on page load
- **Lazy images**: `<img loading="lazy">` defers off-screen image downloads
- **Per-card skeleton**: Each card's image shows its own shimmer until loaded
- **Error fallback**: SVG icon + exercise name when image fails to load

### Responsive Breakpoints
| Breakpoint | Layout |
|------------|--------|
| < 640px | Single column, mobile-first |
| 640px+ | 2-column grid |
| 1024px+ | 3-column grid |

### Tech Stack
- **Vite** — fast dev server and build
- **React 19** + **TypeScript**
- **CSS Modules** — scoped styles, no class conflicts
- **No external UI libraries** — all components hand-crafted

## AI Usage

This project was built with the assistance of an AI coding tool (MiMo Code Agent). The AI was used for:
- Scaffolding the project structure
- Generating component implementations and CSS styling
- Designing the loading/skeleton strategy
- Writing TypeScript types

All code was reviewed, understood, and refined during implementation.

## Project Structure

```
daily-workout/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── ExerciseCard/
│   │   ├── ExerciseDetail/
│   │   ├── Header/
│   │   └── Skeleton/
│   ├── data/
│   │   └── workout-day.json
│   ├── types/
│   │   └── workout.ts
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
└── vite.config.ts
```
