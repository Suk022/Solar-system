import React, { useState, useEffect } from 'react';
import ModalPortal from './ModalPortal';
import apodLogo from '../assets/event/APOD.png';

const getApodButtonStyle = (isSidebarOpen) => ({
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
  width: '100%',
  textAlign: 'center',
  opacity: isSidebarOpen ? 0 : 1,
  visibility: isSidebarOpen ? 'hidden' : 'visible',
  pointerEvents: isSidebarOpen ? 'none' : 'auto',
});

const modalOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'rgba(0, 0, 0, 0.8)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 2000,
};

const modalContentStyle = {
  background: 'rgba(28, 28, 30, 0.98)',
  padding: '2rem',
  borderRadius: '12px',
  width: '90%',
  maxWidth: '800px',
  maxHeight: '90vh',
  overflowY: 'auto',
  position: 'relative',
  border: '1px solid #444',
  color: '#fff',
};

const closeButtonStyle = {
  position: 'absolute',
  top: '1rem',
  right: '1rem',
  background: 'none',
  border: 'none',
  color: '#fff',
  fontSize: '2rem',
  cursor: 'pointer',
};

const mediaStyle = {
  width: '100%',
  maxHeight: '500px',
  objectFit: 'contain',
  borderRadius: '8px',
  marginBottom: '1rem',
};

const ApodViewer = ({ isSidebarOpen, onOpen, onClose: onCloseCallback }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [apodData, setApodData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const API_KEY = import.meta.env.VITE_NASA_API_KEY || 'DEMO_KEY';
  const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

  const fetchApod = async () => {
    if (apodData) return; // Don't re-fetch if data is already loaded
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Failed to fetch APOD data');
      const data = await response.json();
      setApodData(data);
    } catch (error) {
      console.error("Error fetching APOD:", error);
      setApodData(null); // Clear previous data on error
    } finally {
      setLoading(false);
    }
  };

  const handleOpen = () => {
    setIsOpen(true);
    setHasOpened(true);
    onOpen && onOpen();
    fetchApod();
  };

  const handleClose = () => {
    setIsOpen(false);
    onCloseCallback && onCloseCallback();
  };

  return (
    <div style={{
      opacity: isSidebarOpen ? 0 : 1,
      visibility: isSidebarOpen ? 'hidden' : 'visible',
      transition: 'all 0.3s ease',
      pointerEvents: isSidebarOpen ? 'none' : 'auto',
      position: 'relative',
    }}>
      <button
        style={getApodButtonStyle(isSidebarOpen)}
        onClick={handleOpen}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        title="Click to view today's APOD from NASA"
      >
        APOD (ASTRONOMY PICTURE OF THE DAY)
        <img 
          src={apodLogo} 
          alt="APOD Logo" 
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
              {loading && <p>Loading APOD...</p>}
              {!loading && apodData && (
                <>
                  <h2 style={{ marginBottom: '0.5rem' }}>Astronomy Picture of the Day</h2>
                  <h3 style={{ marginBottom: '1rem', color: '#4ecdc4' }}>{apodData.title}</h3>
                  {apodData.media_type === 'image' ? (
                    <img src={apodData.hdurl || apodData.url} alt={apodData.title} style={mediaStyle} />
                  ) : (
                    <iframe
                      src={apodData.url}
                      title={apodData.title}
                      frameBorder="0"
                      allow="fullscreen"
                      style={{ ...mediaStyle, height: '500px' }}
                    ></iframe>
                  )}
                  <p style={{ lineHeight: '1.6' }}>{apodData.explanation}</p>
                </>
              )}
              {!loading && !apodData && <p>Could not load the Picture of the Day. Please try again later.</p>}
            </div>
          </div>
        </ModalPortal>
      )}
    </div>
  );
};

export default ApodViewer; 