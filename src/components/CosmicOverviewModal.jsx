import React from 'react';
import ModalPortal from './ModalPortal';

const modalOverlayStyle = {
  position: 'fixed',
  top: 0, left: 0, right: 0, bottom: 0,
  background: 'transparent',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 2000,
};

const modalContentStyle = {
  background: 'rgba(19, 19, 20, 0.95)',
  padding: '2rem',
  borderRadius: '16px',
  width: '90%',
  maxWidth: '700px',
  maxHeight: '90vh',
  overflowY: 'auto',
  position: 'relative',
  border: '1px solid #444',
  color: '#fff',
  boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
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

const sectionStyle = {
  margin: '1rem 0',
  padding: '1rem',
  backgroundColor: 'rgba(46, 42, 42, 0.03)',
  borderRadius: '8px',
  border: '1px solid rgba(255,255,255,0.05)',
};

const sectionTitleStyle = {
  fontSize: '1.1rem',
  color: '#4ecdc4',
  marginBottom: '1rem',
  fontWeight: 'bold',
  borderBottom: '2px solid rgba(179, 185, 185, 0.3)',
  paddingBottom: '0.5rem',
};

const statItemStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0.5rem 0',
  borderBottom: '1px solid rgba(255,255,255,0.05)',
  fontSize: '0.9rem',
};

const statLabelStyle = {
  color: '#ccc',
  fontWeight: '500',
};

const statValueStyle = {
  color: '#fff',
  fontWeight: 'bold',
  textAlign: 'right',
  fontSize: '0.9rem',
};

export default function CosmicOverviewModal({ open, onClose }) {
  if (!open) return null;
  return (
    <ModalPortal>
      <div style={modalOverlayStyle} onClick={onClose}>
        <div style={modalContentStyle} onClick={e => e.stopPropagation()}>
          <button style={closeButtonStyle} onClick={onClose}>×</button>
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#fff', textAlign: 'center' }}>Cosmic Overview</h2>
          <div style={sectionStyle}>
            <h3 style={sectionTitleStyle}>Our Solar System</h3>
            <div style={statItemStyle}><span style={statLabelStyle}>Planets</span><span style={statValueStyle}>8</span></div>
            <div style={statItemStyle}><span style={statLabelStyle}>Confirmed Moons</span><span style={statValueStyle}>290+</span></div>
            <div style={statItemStyle}><span style={statLabelStyle}>Star</span><span style={statValueStyle}>1 (The Sun)</span></div>
            <div style={statItemStyle}><span style={statLabelStyle}>Dwarf Planets</span><span style={statValueStyle}>5 (Pluto, Eris, etc.)</span></div>
          </div>
          <div style={sectionStyle}>
            <h3 style={sectionTitleStyle}>Other Features</h3>
            <div style={statItemStyle}><span style={statLabelStyle}>Asteroids</span><span style={statValueStyle}>1.1M+</span></div>
            <div style={statItemStyle}><span style={statLabelStyle}>Comets</span><span style={statValueStyle}>4,000+</span></div>
            <div style={statItemStyle}><span style={statLabelStyle}>Kuiper Belt Objects</span><span style={statValueStyle}>100,000+</span></div>
            <div style={statItemStyle}><span style={statLabelStyle}>Oort Cloud Objects</span><span style={statValueStyle}>Billions?</span></div>
          </div>
          <div style={sectionStyle}>
            <h3 style={sectionTitleStyle}>Fun Fact</h3>
            <p style={{ color: '#fff', fontSize: '1rem', lineHeight: 1.6 }}>
              The Solar System is over 4.5 billion years old and is still evolving! Most of its mass is in the Sun, with Jupiter holding most of the rest.
            </p>
          </div>
        </div>
      </div>
    </ModalPortal>
  );
} 