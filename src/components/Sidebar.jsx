import React, { useState, useEffect } from 'react';
import { fetchPlanetData } from '../api/nasa';

const sidebarStyle = {
  position: 'fixed',
  right: 0,
  top: 0,
  bottom: 0,
  width: '450px',
  backgroundColor: 'rgba(18, 18, 19, 0.97)',
  borderLeft: '1px solid #444',
  padding: '2rem',
  color: '#fff',
  transform: 'translateX(100%)',
  transition: 'transform 0.3s ease-in-out',
  overflowY: 'auto',
  zIndex: 1000,
  backdropFilter: 'blur(10px)',
};

const openSidebarStyle = {
  transform: 'translateX(0)',
};

const closeBtnStyle = {
  position: 'absolute',
  top: '1rem',
  right: '1rem',
  background: 'none',
  border: 'none',
  color: '#fff',
  fontSize: '1.5rem',
  cursor: 'pointer',
  padding: '0.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
};

const titleStyle = {
  fontSize: '2.5rem',
  marginBottom: '1rem',
  background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 'bold',
};

const topSectionStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '1rem',
  marginBottom: '2rem',
  padding: '1rem',
  background: 'rgba(255, 255, 255, 0.05)',
  borderRadius: '10px',
};

const modelContainerStyle = {
  height: '200px',
  background: 'rgba(0, 0, 0, 0.3)',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const imagesContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
};

const sectionStyle = {
  marginBottom: '2rem',
  padding: '1rem',
  background: 'rgba(255, 255, 255, 0.03)',
  borderRadius: '8px',
};

const sectionTitleStyle = {
  fontSize: '1.2rem',
  color: '#4ecdc4',
  marginBottom: '1rem',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  paddingBottom: '0.5rem',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '0.5rem',
};

const metricStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0.5rem',
  background: 'rgba(255, 255, 255, 0.05)',
  borderRadius: '4px',
  fontSize: '0.9rem',
};

const surfaceImageStyle = {
  width: '100%',
  height: '95px',
  objectFit: 'cover',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'transform 0.2s',
  ':hover': {
    transform: 'scale(1.05)'
  }
};

const galleryGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '0.5rem',
};

const galleryImageStyle = {
  width: '100%',
  height: '120px',
  objectFit: 'cover',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'transform 0.2s',
};

const newsItemStyle = {
  marginBottom: '1rem',
  paddingBottom: '1rem',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
};

const factImageStyle = {
  width: '100%',
  height: '200px',
  objectFit: 'cover',
  borderRadius: '8px',
  marginBottom: '1rem',
};

const Sidebar = ({ planet, isOpen, onClose }) => {
  const [nasaData, setNasaData] = useState({ gallery: [], fact: null });
  const [loading, setLoading] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverviewExpanded, setIsOverviewExpanded] = useState(false);

  useEffect(() => {
    if (planet) {
      setLoading(true);
      const loadData = async () => {
        const data = await fetchPlanetData(planet.name);
        setNasaData(data);
        setLoading(false);
      };
      loadData();
    }
  }, [planet]);

  // Function to truncate text to specified word limit
  const truncateText = (text, maxWords = 100) => {
    const words = text.split(' ');
    if (words.length <= maxWords) {
      return { text: text, isTruncated: false };
    }
    return {
      text: words.slice(0, maxWords).join(' ') + '...',
      isTruncated: true
    };
  };

  // Function to handle expand/collapse for featured fact
  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Function to handle expand/collapse for overview
  const handleToggleOverview = () => {
    setIsOverviewExpanded(!isOverviewExpanded);
  };

  if (!planet) return null;

  const combinedStyle = {
    ...sidebarStyle,
    ...(isOpen ? openSidebarStyle : {}),
  };

  return (
    <div style={combinedStyle}>
      <button style={closeBtnStyle} onClick={onClose}>×</button>
      <h1 style={titleStyle}>{planet.name}</h1>

      {/* Introduction */}
      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Overview</h2>
        {planet.description ? (
          <div style={{ fontSize: '0.9rem', color: '#ccc', lineHeight: '1.6' }}>
            {(() => {
              const { text, isTruncated } = truncateText(planet.description, 150);
              return (
                <>
                  <p>{isOverviewExpanded ? planet.description : text}</p>
                  {isTruncated && (
                    <button 
                      onClick={handleToggleOverview}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#4ecdc4',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        textDecoration: 'underline',
                        padding: '0',
                        marginTop: '0.5rem'
                      }}
                    >
                      {isOverviewExpanded ? 'Show less' : 'Read more'}
                    </button>
                  )}
                </>
              );
            })()}
          </div>
        ) : (
          <p>{planet.facts[0]}</p>
        )}
      </div>

      {/* Quick Facts */}
      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Quick Facts</h2>
        <div style={{ fontSize: '0.9rem', color: '#ccc' }}>
          {planet.facts.slice(0, 3).map((fact, index) => (
            <p key={index} style={{ marginBottom: '0.5rem', paddingLeft: '1rem', borderLeft: '2px solid #4ecdc4' }}>
              {fact}
            </p>
          ))}
        </div>
      </div>

      {/* Live Planet Gallery */}
      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Live Planet Gallery</h2>
        {loading ? <p>Loading gallery...</p> : (
          <div style={galleryGridStyle}>
            {nasaData.gallery.map((img, index) => (
              <a href={img.href} target="_blank" rel="noopener noreferrer" key={index}>
                <img
                  src={img.href}
                  alt={img.title}
                  style={galleryImageStyle}
                  title={img.title}
                />
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Physical Characteristics */}
      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Physical Characteristics</h2>
        <div style={gridStyle}>
          {planet.physicalCharacteristics && Object.entries(planet.physicalCharacteristics).map(([key, value]) => (
            <div key={key} style={metricStyle}>
              <span>{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
              <span>{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Atmosphere & Surface */}
      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Atmosphere & Surface</h2>
        {planet.atmosphere && (
          <>
            <h3 style={{...sectionTitleStyle, fontSize: '1rem'}}>Atmosphere</h3>
            <p>Composition: {planet.atmosphere.composition}</p>
            <p>Pressure: {planet.atmosphere.pressure}</p>
          </>
        )}
        {planet.surface && (
          <>
            <h3 style={{...sectionTitleStyle, fontSize: '1rem', marginTop: '1rem'}}>Surface</h3>
            <p>Features: {planet.surface.features}</p>
            <p>Temperature: {planet.surface.temperature}</p>
          </>
        )}
      </div>

      {/* Internal Structure */}
      {planet.internalStructure && (
        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Internal Structure</h2>
          <p>{planet.internalStructure.core}</p>
          <p>{planet.internalStructure.details}</p>
        </div>
      )}

      {/* Exploration History */}
      {planet.exploration && (
        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Exploration History</h2>
          <p><strong>Missions:</strong> {planet.exploration.missions.join(', ')}</p>
          <p><strong>Discoveries:</strong> {planet.exploration.discoveries}</p>
        </div>
      )}

      {/* Cultural Impact */}
      {planet.culturalImpact && (
        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Cultural Impact</h2>
          <p><strong>Mythology:</strong> {planet.culturalImpact.mythology}</p>
          {planet.culturalImpact.inMedia && (
            <p><strong>In Media:</strong> {planet.culturalImpact.inMedia.join(', ')}</p>
          )}
          {planet.culturalImpact.symbolism && (
            <p><strong>Symbolism:</strong> {planet.culturalImpact.symbolism}</p>
          )}
        </div>
      )}

      {/* Featured Fact / Event */}
      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Featured Fact / Event</h2>
        {loading ? <p>Loading fact...</p> : (
          nasaData.fact ? (
            <div>
              <img src={nasaData.fact.url} alt={nasaData.fact.title} style={factImageStyle} />
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#4ecdc4' }}>{nasaData.fact.title}</h3>
              <div style={{ fontSize: '0.9rem', color: '#ccc' }}>
                {(() => {
                  const { text, isTruncated } = truncateText(nasaData.fact.explanation);
                  return (
                    <>
                      <p>{isExpanded ? nasaData.fact.explanation : text}</p>
                      {isTruncated && (
                        <button 
                          onClick={handleToggleExpand}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: '#4ecdc4',
                            cursor: 'pointer',
                            fontSize: '0.9rem',
                            textDecoration: 'underline',
                            padding: '0',
                            marginTop: '0.5rem'
                          }}
                        >
                          {isExpanded ? 'Show less' : 'Read more'}
                        </button>
                      )}
                    </>
                  );
                })()}
              </div>
            </div>
          ) : (
            <p>No special event or fact could be found for {planet.name} at this time.</p>
          )
        )}
      </div>
    </div>
  );
};

export default Sidebar; 