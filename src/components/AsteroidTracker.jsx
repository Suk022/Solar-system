import React, { useState, useEffect } from 'react';
import ModalPortal from './ModalPortal';
import asteroidImg from '../assets/textures/moon.jpg'; // Use moon.jpg as a generic asteroid image
import asteroidLogo from '../assets/event/Asteorid.png';

const trackerButtonStyle = {
  background: 'rgba(40, 37, 37, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  color: '#fff',
  padding: '0.6rem 1.5rem',
  borderRadius: '20px',
  cursor: 'pointer',
  fontFamily: "'Arial', sans-serif",
  fontSize: '.7rem',
  fontWeight: 'bold',
  letterSpacing: '0.1em',
  transition: 'all 0.3s ease',
  backdropFilter: 'blur(5px)',
  width: '100%', // Set a fixed width for alignment
  textAlign: 'center',
  marginBottom: '0.5rem',
};

const modalOverlayStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
    background: 'rgba(0, 0, 0, 0.8)', display: 'flex',
    alignItems: 'center', justifyContent: 'center', zIndex: 2000,
};

const modalContentStyle = {
    background: 'rgba(28, 28, 30, 0.98)', padding: '2rem', borderRadius: '12px',
    width: '90%', maxWidth: '800px', maxHeight: '90vh', overflowY: 'auto',
    position: 'relative', border: '1px solid #444', color: '#fff',
};

const closeButtonStyle = {
    position: 'absolute', top: '1rem', right: '1rem', background: 'none',
    border: 'none', color: '#fff', fontSize: '2rem', cursor: 'pointer',
};

const asteroidItemStyle = {
    padding: '1rem',
    borderBottom: '1px solid #444',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1.5rem',
};

const asteroidImgStyle = {
  width: '80px',
  height: '80px',
  objectFit: 'cover',
  borderRadius: '10px',
  background: '#222',
  flexShrink: 0,
};

const noImgStyle = {
  width: '80px',
  height: '80px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#222',
  color: '#aaa',
  borderRadius: '10px',
  fontSize: '0.8rem',
  flexShrink: 0,
};

const AsteroidTracker = ({ isSidebarOpen, onOpen, onClose: onCloseCallback }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [asteroids, setAsteroids] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const API_KEY = import.meta.env.VITE_NASA_API_KEY || 'DEMO_KEY';
  
  const getTodayDate = () => new Date().toISOString().split('T')[0];

  const fetchAsteroids = async () => {
    if (asteroids.length > 0) return;
    setLoading(true);
    const today = getTodayDate();
    try {
      const response = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${today}&end_date=${today}&api_key=${API_KEY}`);
      if (!response.ok) throw new Error('Failed to fetch asteroid data');
      const data = await response.json();
      setAsteroids(data.near_earth_objects[today] || []);
    } catch (error) {
      console.error("Error fetching asteroids:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleOpen = () => {
    setIsOpen(true);
    setHasOpened(true);
    onOpen && onOpen();
    fetchAsteroids();
  };

  const handleClose = () => {
    setIsOpen(false);
    onCloseCallback && onCloseCallback();
  };

  const containerStyle = {
    opacity: isSidebarOpen ? 0 : 1,
    visibility: isSidebarOpen ? 'hidden' : 'visible',
    transition: 'all 0.3s ease',
    pointerEvents: isSidebarOpen ? 'none' : 'auto',
    position: 'relative',
  };

  return (
    <div style={containerStyle}>
      <button
        style={trackerButtonStyle}
        onClick={handleOpen}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        title="Track asteroids near Earth today"
      >
        ASTEROID TRACKER
        <img 
          src={asteroidLogo} 
          alt="Asteroid Tracker Logo" 
          style={{
            position: 'absolute',
            top: isHovered ? '-60px' : '-18px',
            right: isHovered ? '-60px' : '-18px',
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            boxShadow: '0 2px 8px 0 rgba(0,0,0,0.18)',
            background: '#fff',
            zIndex: 10,
            transition: 'top 0.35s cubic-bezier(.4,2,.6,1), right 0.35s cubic-bezier(.4,2,.6,1), opacity 0.35s',
            opacity: isHovered ? 0 : 1,
          }}
        />
      </button>
      {isOpen && (
        <ModalPortal>
          <div style={modalOverlayStyle} onClick={handleClose}>
            <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
              <button style={closeButtonStyle} onClick={handleClose}>×</button>
              <h2 style={{ marginBottom: '1rem' }}>Near-Earth Asteroids for {getTodayDate()}</h2>
              {loading && <p>Loading asteroid data...</p>}
              {!loading && asteroids.length > 0 ? (
                <div>
                  {asteroids.map(asteroid => (
                    <div key={asteroid.id} style={asteroidItemStyle}>
                      <div>
                        <h3 style={{ color: '#4ecdc4' }}>{asteroid.name}</h3>
                        <p>Estimated Diameter: {Math.round(asteroid.estimated_diameter.meters.estimated_diameter_max)} meters</p>
                        <p>Closest Approach: {asteroid.close_approach_data[0].close_approach_date_full.split(' ')[1]} UT</p>
                        <p>Miss Distance: {Math.round(asteroid.close_approach_data[0].miss_distance.kilometers).toLocaleString()} km</p>
                        <p style={{ color: asteroid.is_potentially_hazardous_asteroid ? '#ff6b6b' : '#fff' }}>
                          Potentially Hazardous: {asteroid.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}
                        </p>
                        {asteroid.neo_reference_id ? (
                          <a
                            href={`https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=${asteroid.neo_reference_id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: '#ffd166', textDecoration: 'underline', fontSize: '0.87em', fontWeight: 500 }}
                          >
                            More Info (Source - JPL SBDB)
                          </a>
                        ) : (
                          <span style={{ color: '#aaa', fontSize: '0.95em', fontWeight: 500 }}>More Info ...</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : !loading && <p>No asteroid data available for today.</p>}
            </div>
          </div>
        </ModalPortal>
      )}
    </div>
  );
};

export default AsteroidTracker; 