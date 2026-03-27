# Solar System Explorer

An immersive, interactive **3D web application** that brings the solar system to life.
Explore planets, track real-time NASA data, and experience space through an engaging
educational interface — built for **[AstroHack 2025](https://devpost.com/software/interactive-solar-system)**,
where it placed **3rd overall**.


---

## Features

### Immersive 3D Solar System
- Realistic planet models with WebP-optimised texture mapping
- Dynamic orbital motion with accurate relative speeds and distances
- NASA-style pan, zoom, and rotation via OrbitControls
- Click planets to open detailed sidebars; hover for quick facts
- Star field background with slow ambient rotation

### Live NASA Data Integration
- **APOD** – Astronomy Picture of the Day with localStorage caching + TTL
- **NeoWs** – Real-time near-Earth asteroid tracking with date-based cache keys
- **Space News** – Latest space exploration updates from Spaceflight News API
- **Random Space Facts** – Educational facts with a 10-second cooldown on refetch

### Performance
- Planet textures converted from JPG → WebP with resolution scaling:
  **64 MB → 3.2 MB (95% reduction)**
- Lazy-loaded UI components (modals, sidebars) via `React.lazy` + `Suspense`
- Manual Vite chunk splitting isolating Three.js, Fiber, and Drei as vendor chunks
- localStorage caching across all NASA API calls to minimise rate limiting

### Architecture
- `BasePlanet` abstraction — shared rendering logic across all planet components
- `BaseSidebar` abstraction — unified layout and state for all sidebar panels
- Changelog modal surfacing project history with GitHub commit links
- Component-level code splitting resulting in 8 separate JS chunks at build time

---

## Tech Stack

| Layer | Technology |
|---|---|
| UI Framework | React 18 with hooks |
| 3D Engine | Three.js + React Three Fiber |
| 3D Helpers | React Three Drei (OrbitControls, Stars, Html, useTexture) |
| Build Tool | Vite |
| Deployment | Vercel |
| APIs | NASA APOD, NASA NeoWs, Spaceflight News |
| Styling | CSS3 with custom animations |

---

## Getting Started

### Prerequisites
- Node.js v16+
- npm or yarn
- Modern browser with WebGL support

### Installation
```bash
git clone https://github.com/Suk022/Solar-system.git
cd Solar-system
npm install
npm run dev
```

### Commands
```bash
npm run dev       # Start development server
npm run build     # Production build
npm run preview   # Preview production build
```

---

## Project Structure
```
src/
├── api/              # NASA API calls with caching logic
├── assets/           # WebP textures, icons
├── components/
│   ├── planets/      # Per-planet components extending BasePlanet
│   ├── features/     # AsteroidTracker, ApodViewer, RandomSpaceFact
│   ├── menu/         # MoreMenu, SpaceNews
│   ├── BasePlanet    # Shared planet rendering abstraction
│   ├── BaseSidebar   # Shared sidebar layout abstraction
│   ├── PlanetSidebar
│   └── ChangelogModal
├── data/
│   ├── planets.js    # Planet config and texture mapping
│   └── changelog.js  # Project changelog entries
└── Home.jsx          # Main scene orchestrator
```

---

## Performance Snapshot

| Metric | Before | After |
|---|---|---|
| Total asset payload | ~64 MB | ~3.2 MB |
| JS chunks | 1 monolithic bundle | 8 separate chunks |
| NASA API calls on repeat visits | Full refetch | Cached via localStorage |

> **Note:** Lighthouse Performance score is low (~26) due to Three.js + React Three Fiber
> initialization cost (~3s main thread block), which is inherent to the library stack.
> Asset and caching optimisations are the meaningful levers available at this level.

---

## Changelog

See [`src/data/changelog.js`](./src/data/changelog.js) for the full feature history,
or click the **↻** button in the live app.

---

## Future Enhancements

- **Space Chatbot** – Ask space-related queries with real-time answers
- **Constellations & Deep Space** – Stars, galaxies, and named constellations
- **Advanced Shaders** – Atmospheric effects, realistic lighting and shadows
- **PWA Support** – Offline functionality and app-like experience
- **Real-time Mission Tracking** – Live updates on active space missions
- **Multi-language Support** – Accessibility for global users

---

## Contributing

This started as a hackathon project and is actively being improved.
All contributions are welcome — bugs, features, design ideas, or documentation.

1. Fork the repository
2. Create a branch: `git checkout -b your-feature-name`
3. Commit your changes
4. Open a Pull Request

---

## Acknowledgments

- **NASA** – Open APIs and astronomical data
- **Three.js Community** – The 3D graphics library powering the scene
- **React Team** – The component model everything is built on
- **AstroHack 2025** – For the opportunity to build and showcase this
