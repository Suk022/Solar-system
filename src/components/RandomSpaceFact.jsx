import React, { useState } from 'react';
import ModalPortal from './ModalPortal';
import randomLogo from '../assets/event/Random.png';

const factButtonStyle = {
    background: 'rgba(40, 37, 37, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    color: '#fff',
    padding: '0.5rem 1.5rem',
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

const mediaStyle = {
  width: '100%',
  maxHeight: '400px',
  objectFit: 'contain',
  borderRadius: '8px',
  marginBottom: '1rem',
};

const RandomSpaceFact = ({ isSidebarOpen, onOpen, onClose: onCloseCallback }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [fact, setFact] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const API_KEY = import.meta.env.VITE_NASA_API_KEY || 'DEMO_KEY';
  const aToZ = "abcdefghijklmnopqrstuvwxyz";
  const randomCharacter = aToZ[Math.floor(Math.random() * aToZ.length)];

  const fetchFact = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://images-api.nasa.gov/search?q=${randomCharacter}&media_type=image`);
      if (!response.ok) throw new Error('Failed to fetch data');
      const data = await response.json();
      const items = data.collection.items;
      if (items.length > 0) {
        const randomItem = items[Math.floor(Math.random() * items.length)];
        setFact({
          title: randomItem.data[0].title,
          explanation: randomItem.data[0].description,
          url: randomItem.links[0].href,
        });
      } else {
        throw new Error('No items found');
      }
    } catch (error) {
      console.error("Error fetching random fact:", error);
      setFact(null);
    } finally {
      setLoading(false);
    }
  };

  const handleOpen = () => {
    setIsOpen(true);
    setHasOpened(true);
    onOpen && onOpen();
    fetchFact();
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
        style={factButtonStyle}
        onClick={handleOpen}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        title="Get a random space fact"
      >
        RANDOM SPACE FACT
        <img 
          src={randomLogo} 
          alt="Random Fact Logo" 
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
              <h2 style={{ marginBottom: '1rem' }}>Random Space Fact</h2>
              {loading && <p>Searching the cosmos for a fact...</p>}
              {!loading && fact ? (
                <>
                  <h3 style={{ color: '#4ecdc4', marginBottom: '1rem' }}>{fact.title}</h3>
                  <img src={fact.url} alt={fact.title} style={mediaStyle} />
                  <p style={{ lineHeight: '1.6' }}>{fact.explanation}</p>
                </>
              ) : !loading && <p>Could not fetch a fact. Please try again.</p>}
            </div>
          </div>
        </ModalPortal>
      )}
    </div>
  );
};

export default RandomSpaceFact; 