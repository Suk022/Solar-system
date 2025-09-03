import React, { useState } from 'react';

const containerStyle = {
  position: 'fixed',
  bottom: '1.5rem',
  left: '1.5rem',
  zIndex: 1001,
  display: 'flex',
  alignItems: 'flex-end',
  gap: '1rem',
};

const buttonWrapperStyle = {
  // This wrapper isolates the button from the panel's layout changes.
};

const buttonStyle = {
  background: 'rgba(255, 255, 255, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  color: '#fff',
  width: '40px',
  height: '40px',
  borderRadius: '70%',
  fontSize: '1.2rem',
  fontFamily: "'Arial', sans-serif",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.3s ease',
  backdropFilter: 'blur(5px)',
};

const panelStyle = {
  background: 'rgba(20, 20, 30, 0.95)',
  color: '#fff',
  borderRadius: '12px',
  boxShadow: '0 4px 24px 0 rgba(0,0,0,0.4)',
  padding: '1em 1.5em',
  fontFamily: "'Arial', sans-serif",
  fontSize: '.8rem',
  border: '0px solid #444',
  maxWidth: '290px',
};

const panelTitleStyle = {
    fontWeight: 'bold',
    fontSize: '1.1em',
    marginBottom: '0.5em',
    color: '#4ecdc4',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
};

const listStyle = {
    listStyle: 'none',
    paddingLeft: 0,
};

const listItemStyle = {
    marginBottom: '0.5em',
};

const HelpButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      style={containerStyle}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div style={buttonWrapperStyle}>
        <button 
          style={buttonStyle}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
          onMouseLeave={(e) => e.currentTarget.style.background = ' rgba(30, 28, 28, 0.2)'}
         
        >
          ?
        </button>
      </div>
      {isOpen && (
        <div style={panelStyle}>
            <div style={panelTitleStyle}>How to Navigate</div>
            <ul style={listStyle}>
                <li style={listItemStyle}><b>Click & Drag:</b> Rotates camera to explore Solar system from different angles .</li>
                <li style={listItemStyle}><b>Pinch In/Out:</b> Zoom in or out for a closer or wider view.</li>
                <li style={listItemStyle}><b>Hover on a planet:</b> See quick facts at top-right corner.</li>
                <li style={listItemStyle}><b>Click on a planet:</b> Open a sidebar for detailed info.</li>
            </ul>
        </div>
      )}
    </div>
  );
};

export default HelpButton; 