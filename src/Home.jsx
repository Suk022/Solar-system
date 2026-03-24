import { useState, useRef, useEffect, lazy, Suspense } from "react";
import SolarSystem3D from "./components/SolarSystem3D";
import RefreshIcon from "./assets/icon/refresh.png";

import MoreMenu from './components/menu/MoreMenu';
import './styles.css';

// Lazy load non-critical components
const PlanetSidebar = lazy(() => import('./components/PlanetSidebar'));
const HelpButton = lazy(() => import('./components/HelpButton'));
const ApodViewer = lazy(() => import('./components/features/ApodViewer'));
const AsteroidTracker = lazy(() => import('./components/features/AsteroidTracker'));
const RandomSpaceFact = lazy(() => import('./components/features/RandomSpaceFact'));
const ChangelogModal = lazy(() => import('./components/ChangelogModal'));

const Home = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAnyInfoComponentOpen, setIsAnyInfoComponentOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [isChangelogOpen, setIsChangelogOpen] = useState(false);
  const [spinning, setSpinning] = useState(false);
  const solarSystem3DRef = useRef();

  const handlePlanetClick = (planet) => {
    setSelectedPlanet(planet);
    setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
    // Optional: delay clearing the selected planet until after animation
    setTimeout(() => setSelectedPlanet(null), 300);
  };

  const handleInfoComponentOpen = () => {
    setIsAnyInfoComponentOpen(true);
  };

  const handleInfoComponentClose = () => {
    setIsAnyInfoComponentOpen(false);
  };

  const handleOpenMoreMenu = () => setIsMoreMenuOpen(true);
  const handleCloseMoreMenu = () => setIsMoreMenuOpen(false);

  // Zoom and fullscreen handlers
  const handleZoomIn = () => {
    if (solarSystem3DRef.current) solarSystem3DRef.current.zoomIn();
  };
  const handleZoomOut = () => {
    if (solarSystem3DRef.current) solarSystem3DRef.current.zoomOut();
  };
  const handleFullscreen = () => {
    const elem = document.querySelector('.solar-system-container');
    if (elem && elem.requestFullscreen) elem.requestFullscreen();
  };

  // Periodic spin animation for refresh icon
  useEffect(() => {
    const interval = setInterval(() => {
      setSpinning(true);
      setTimeout(() => setSpinning(false), 5000);
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <div className="header">
        <h1>Explore Our Solar System</h1>
        {!isAnyInfoComponentOpen && (
          <button className="more-menu-btn" onClick={handleOpenMoreMenu} title="More">
            <span className="more-menu-icon">≡</span> More
          </button>
        )}
      </div>
      <div className="solar-system-container">
        <SolarSystem3D 
          ref={solarSystem3DRef}
          onPlanetClick={handlePlanetClick}
          isSidebarOpen={isSidebarOpen}
        />
      </div>
      <Suspense fallback={null}>
        <PlanetSidebar 
          planet={selectedPlanet} 
          isOpen={isSidebarOpen} 
          onClose={handleCloseSidebar}
        />
      </Suspense>

      <Suspense fallback={null}>
        <HelpButton />
      </Suspense>
      
      <div className="info-buttons-row">
        <Suspense fallback={null}>
          <AsteroidTracker 
            isSidebarOpen={isSidebarOpen} 
            onOpen={handleInfoComponentOpen}
            onClose={handleInfoComponentClose}
          />
        </Suspense>
        <Suspense fallback={null}>
          <ApodViewer 
            isSidebarOpen={isSidebarOpen} 
            onOpen={handleInfoComponentOpen}
            onClose={handleInfoComponentClose}
          />
        </Suspense>
        <Suspense fallback={null}>
          <RandomSpaceFact 
            isSidebarOpen={isSidebarOpen} 
            onOpen={handleInfoComponentOpen}
            onClose={handleInfoComponentClose}
          />
        </Suspense>
      </div>
      {!isSidebarOpen && (
        <div className="floating-toolbar">
          <button className="toolbar-btn" onClick={() => setIsChangelogOpen(true)} title="What's New">
            <img 
              src={RefreshIcon} 
              alt="Changelog" 
              style={{width: "16px", height: "16px"}} 
              className={spinning ? "spin-hint" : ""}
            />
          </button>
          <button className="toolbar-btn" onClick={handleZoomIn} title="Zoom In">+</button>
          <button className="toolbar-btn" onClick={handleZoomOut} title="Zoom Out">-</button>
          <button className="toolbar-btn" onClick={handleFullscreen} title="Fullscreen">⛶</button>
        </div>
      )}
      <Suspense fallback={null}>
        <ChangelogModal isOpen={isChangelogOpen} onClose={() => setIsChangelogOpen(false)} />
      </Suspense>
      <Suspense fallback={null}>
        <MoreMenu open={isMoreMenuOpen} onClose={handleCloseMoreMenu} />
      </Suspense>
    </div>
  );
};

export default Home;