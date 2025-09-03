import React, { useState, useRef } from "react";
import SolarSystem3D from "../components/SolarSystem3D";
import Sidebar from "../components/Sidebar";
import HelpButton from "../components/HelpButton";
import ApodViewer from "../components/ApodViewer";
import AsteroidTracker from "../components/AsteroidTracker";
import RandomSpaceFact from "../components/RandomSpaceFact";
import SolarSystemStats from "../components/SolarSystemStats";
import MoreMenu from '../components/MoreMenu';
import '../styles.css';

const infoButtonsContainerStyle = {
  position: 'fixed',
  bottom: '1.5rem',
  right: '1.5rem',
  zIndex: 1001,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
};

const Home = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAnyInfoComponentOpen, setIsAnyInfoComponentOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
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
  const handleViewMore = (section) => {
    // Placeholder: could open a full list modal for the section
    alert('View more: ' + section);
  };

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
      <Sidebar 
        planet={selectedPlanet} 
        isOpen={isSidebarOpen} 
        onClose={handleCloseSidebar}
      />
      <SolarSystemStats 
        isSidebarOpen={isSidebarOpen} 
        isAnyInfoComponentOpen={isAnyInfoComponentOpen}
      />
      <HelpButton />
      <div className="info-buttons-row">
        <AsteroidTracker 
          isSidebarOpen={isSidebarOpen} 
          onOpen={handleInfoComponentOpen}
          onClose={handleInfoComponentClose}
        />
        <ApodViewer 
          isSidebarOpen={isSidebarOpen} 
          onOpen={handleInfoComponentOpen}
          onClose={handleInfoComponentClose}
        />
        <RandomSpaceFact 
          isSidebarOpen={isSidebarOpen} 
          onOpen={handleInfoComponentOpen}
          onClose={handleInfoComponentClose}
        />
      </div>
      {!isSidebarOpen && (
        <div className="floating-toolbar">
          <button className="toolbar-btn" onClick={handleZoomIn} title="Zoom In">+</button>
          <button className="toolbar-btn" onClick={handleZoomOut} title="Zoom Out">-</button>
          <button className="toolbar-btn" onClick={handleFullscreen} title="Fullscreen">⛶</button>
        </div>
      )}
      <MoreMenu open={isMoreMenuOpen} onClose={handleCloseMoreMenu} onViewMore={handleViewMore} />
    </div>
  );
};

export default Home; 