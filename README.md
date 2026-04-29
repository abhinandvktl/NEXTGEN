# NEXTGEN — Elite IT Agency Website

A premium, fully responsive React agency website built with Vite, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Fully Responsive** — Mobile (320px+), Tablet, Desktop
- **Custom Cursor** — Magnetic dot + spring-animated trail ring (desktop only)
- **Moving Spotlight** — Mouse-tracking radial glow effect
- **Scroll Animations** — Framer Motion powered reveal-on-scroll throughout
- **Counter Animations** — Stats count up when scrolled into view
- **Glassmorphism** — Backdrop-blur cards with neon blue accents
- **Bento Grid Layout** — Asymmetric about section
- **Command Line Form** — Terminal-inspired contact section
- **Mobile Hamburger Menu** — Animated slide-down with staggered links
- **Hover FX** — Project cards lift/glow + reveal IT solution overlay

## 📁 Project Structure

```
nextgen/
├── index.html
├── vite.config.js
├── tailwind.config.js          ← Custom neon color extensions
├── postcss.config.js
├── package.json
└── src/
    ├── main.jsx                ← React entry point
    ├── App.jsx                 ← Root component
    ├── index.css               ← Global styles + Tailwind
    ├── data/
    │   └── index.js            ← All project, service, stat data
    ├── hooks/
    │   └── useScrollReveal.js  ← Custom intersection observer hook
    └── components/
        ├── CustomCursor.jsx    ← Framer Motion cursor + trail
        ├── Navbar.jsx          ← Transparent → solid on scroll, mobile menu
        ├── Hero.jsx            ← Animated headline, spotlight, scroll indicator
        ├── Stats.jsx           ← Animated counters
        ├── Services.jsx        ← 6-card service grid
        ├── PortfolioGrid.jsx   ← 6-project responsive grid with hover overlays
        ├── About.jsx           ← Bento grid layout
        ├── ContactSection.jsx  ← Command-line style form
        └── Footer.jsx          ← Links grid + back-to-top
```

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Design System

### Color Palette
| Token | Value | Usage |
|-------|-------|-------|
| `--space` | `#020617` | Background |
| `--slate-dark` | `#0f172a` | Card backgrounds |
| `--neon-blue` | `#3b82f6` | Accents, CTAs |
| `--neon-glow` | `rgba(59,130,246,0.4)` | Glow effects |

### Typography
- **Display**: Syne (headers, logo, big numbers)
- **Body**: Space Grotesk (paragraphs, UI text)
- **Mono**: Courier New (contact form)

### Responsive Breakpoints (Tailwind defaults)
- `sm`: 640px+
- `md`: 768px+
- `lg`: 1024px+
- `xl`: 1280px+

## 📦 Tech Stack

| Package | Purpose |
|---------|---------|
| React 18 | UI framework |
| Vite | Build tool |
| Tailwind CSS 3 | Utility styling |
| Framer Motion 11 | Animations |
| Lucide React | Icons |

## 🔧 Customization

### Add/Edit Projects
Edit `src/data/index.js` — `projectsData` array:
```js
{
  id: 7,
  title: 'Project Eta — Your Project',
  description: 'Project description here.',
  imagePlaceholder: '🚀',
  gradient: 'linear-gradient(135deg, #0f172a, #1e3a5f)',
  accentColor: '#3b82f6',
  tags: ['React', 'AWS'],
  liveLink: 'https://your-project.com',
  solution: 'Your IT Solution Type',
}
```

### Add/Edit Services
Edit `servicesData` in `src/data/index.js`.

### Change Colors
Edit `tailwind.config.js` → `theme.extend.colors`.
