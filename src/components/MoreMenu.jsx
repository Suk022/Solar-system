import React, { useState } from 'react';
import ModalPortal from './ModalPortal';
import SpaceNews from './SpaceNews';

const modalOverlayStyle = {
  position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
  background: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', zIndex: 2000,
};
const modalContentStyle = {
  background: 'linear-gradient(180deg,rgb(20, 20, 20) 90%,rgb(24, 24, 26) 100%)',
  color: '#fff',
  borderRadius: '16px',
  marginTop: '3.50rem',
  padding: '2.5rem 2.5rem 2rem 2.5rem',
  minWidth: '900px',
  maxWidth: '98vw',
  maxHeight: '80vh',
  overflowY: 'auto',
  boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
  position: 'relative',
};
const closeButtonStyle = {
  position: 'absolute', top: '1.0rem', right: '1.2rem', background: 'none', border: 'none', color: '#fff', fontSize: '2rem', cursor: 'pointer', zIndex: 10,
};
const sectionTitleStyle = {
  fontWeight: 700, fontSize: '1.0rem', marginBottom: '1.2rem', letterSpacing: '0.04em', color: '#fff',
};
const listStyle = {
  fontWeight: 100,  listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem',
};
const linkStyle = {
  color: '#bfc3c9', textDecoration: 'none', fontWeight: 500, fontSize: '1.05rem', transition: 'color 0.2s',
};
const viewMoreStyle = {
  color: '#ffd166', textDecoration: 'none', fontWeight: 600, fontSize: '1rem', marginTop: '1.2rem', cursor: 'pointer',
};
const colStyle = { flex: 1, minWidth: 180, marginRight: 32 };
const rowStyle = { display: 'flex', gap: 32, marginBottom: 32 };

// Data (short lists for main menu)
const DWARF_PLANETS = [
  { name: 'Pluto', url: 'https://solarsystem.nasa.gov/planets/dwarf-planets/pluto/overview/' },
  { name: 'Eris', url: 'https://solarsystem.nasa.gov/planets/dwarf-planets/eris/overview/' },
  { name: 'Haumea', url: 'https://solarsystem.nasa.gov/planets/dwarf-planets/haumea/overview/' },
  { name: 'Makemake', url: 'https://solarsystem.nasa.gov/planets/dwarf-planets/makemake/overview/' },
  { name: 'Ceres', url: 'https://solarsystem.nasa.gov/planets/dwarf-planets/ceres/overview/' },
  { name: 'Vesta', url: 'https://en.wikipedia.org/wiki/4_Vesta' },
  { name: 'Bennu', url: 'https://en.wikipedia.org/wiki/101955_Bennu' },
  { name: 'Ryugu', url: 'https://en.wikipedia.org/wiki/162173_Ryugu' },
];
const COMETS = [
  { name: 'Halley', url: 'https://solarsystem.nasa.gov/asteroids-comets-and-meteors/comets/1p-halley/in-depth/' },
  { name: 'Tempel 1', url: 'https://en.wikipedia.org/wiki/Tempel_1' },
  { name: '67P/Churyumov-Gerasimenko', url: 'https://en.wikipedia.org/wiki/67P/Churyumov%E2%80%93Gerasimenko' },
  { name: 'Hartley 2', url: 'https://en.wikipedia.org/wiki/103P/Hartley' },
];
const SPACECRAFT = [
  { name: 'Voyager 1', url: 'https://voyager.jpl.nasa.gov/' },
  { name: 'Voyager 2', url: 'https://voyager.jpl.nasa.gov/' },
  { name: 'Juno', url: 'https://www.missionjuno.swri.edu/' },
  { name: 'New Horizons', url: 'https://www.nasa.gov/mission_pages/newhorizons/main/index.html' },
  { name: 'Lucy', url: 'https://www.nasa.gov/mission_pages/lucy/main/index.html' },
  { name: 'OSIRIS-REx', url: 'https://www.asteroidmission.org/' },
  { name: 'Psyche', url: 'https://www.nasa.gov/psyche' },
  { name: 'James Webb Space Telescope', url: 'https://jwst.nasa.gov/' },
  { name: 'International Space Station', url: 'https://www.nasa.gov/mission_pages/station/main/index.html' },
];

function groupAndSort(items) {
  // Group by first letter (A-F, G-K, etc.)
  const groups = [
    { label: '0-9', range: /^[0-9]/i },
    { label: 'A-F', range: /^[A-F]/i },
    { label: 'G-K', range: /^[G-K]/i },
    { label: 'L-P', range: /^[L-P]/i },
    { label: 'Q-U', range: /^[Q-U]/i },
    { label: 'V-Z', range: /^[V-Z]/i },
  ];
  // Include 'range' in grouped so .test is available
  const grouped = groups.map(g => ({ label: g.label, range: g.range, items: [] }));
  const sorted = [...items].sort((a, b) => a.name.localeCompare(b.name));
  for (const item of sorted) {
    const group = grouped.find(g => g.range.test(item.name));
    if (group) group.items.push(item);
  }
  // Remove 'range' before returning for rendering
  return grouped.map(({ label, items }) => ({ label, items }));
}

export default function MoreMenu({ open, onClose }) {
  const [expanded, setExpanded] = useState(null); // 'dwarf', 'comets', 'spacecraft', or null
  if (!open) return null;

  // Data for expanded view
  let expandedData = null;
  let expandedTitle = '';
  if (expanded === 'dwarf') {
    expandedData = groupAndSort(DWARF_PLANETS);
    expandedTitle = 'Dwarf Planets & Asteroids';
  } else if (expanded === 'comets') {
    expandedData = groupAndSort(COMETS);
    expandedTitle = 'Comets';
  } else if (expanded === 'spacecraft') {
    expandedData = groupAndSort(SPACECRAFT);
    expandedTitle = 'Spacecraft';
  }

  return (
    <ModalPortal>
      <div style={modalOverlayStyle} onClick={onClose}>
        <div style={modalContentStyle} onClick={e => e.stopPropagation()}>
          <button style={closeButtonStyle} onClick={onClose}>×</button>
          {expanded ? (
            <>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
                <button onClick={() => setExpanded(null)} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '1.1rem', cursor: 'pointer', marginRight: '1.5rem', fontWeight: 600, letterSpacing: '0.04em' }}>&lt; BACK</button>
                <div style={{ ...sectionTitleStyle, fontSize: '1.25rem', marginBottom: 0, flex: 1, textAlign: 'center' }}>{expandedTitle}</div>
              </div>
              <div style={{ display: 'flex', gap: 32 }}>
                {expandedData.map(group => (
                  <div key={group.label} style={{ flex: 1, minWidth: 180, marginRight: 32 }}>
                    <div style={{ ...sectionTitleStyle, fontSize: '1.05rem', color: '#fff', marginBottom: '1.2rem', textAlign: 'left' }}>{group.label}</div>
                    <ul style={listStyle}>
                      {group.items.map(obj => (
                        <li key={obj.name}><a href={obj.url} target="_blank" rel="noopener noreferrer" style={linkStyle}>{obj.name}</a></li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div style={rowStyle}>
              <div style={colStyle}>
                <div style={sectionTitleStyle}>Dwarf Planets & Asteroids</div>
                <ul style={listStyle}>
                  {DWARF_PLANETS.slice(0, 6).map(obj => (
                    <li key={obj.name}><a href={obj.url} target="_blank" rel="noopener noreferrer" style={linkStyle}>{obj.name}</a></li>
                  ))}
                </ul>
                <div style={viewMoreStyle} onClick={() => setExpanded('dwarf')}>View More</div>
              </div>
              <div style={colStyle}>
                <div style={sectionTitleStyle}>Comets</div>
                <ul style={listStyle}>
                  {COMETS.map(obj => (
                    <li key={obj.name}><a href={obj.url} target="_blank" rel="noopener noreferrer" style={linkStyle}>{obj.name}</a></li>
                  ))}
                </ul>
                <div style={viewMoreStyle} onClick={() => setExpanded('comets')}>View More</div>
              </div>
              <div style={colStyle}>
                <div style={sectionTitleStyle}>Spacecraft</div>
                <ul style={listStyle}>
                  {SPACECRAFT.slice(0, 7).map(obj => (
                    <li key={obj.name}><a href={obj.url} target="_blank" rel="noopener noreferrer" style={linkStyle}>{obj.name}</a></li>
                  ))}
                </ul>
                <div style={viewMoreStyle} onClick={() => setExpanded('spacecraft')}>View More</div>
              </div>
              <div style={colStyle}>
                <SpaceNews />
              </div>
            </div>
          )}
        </div>
      </div>
    </ModalPortal>
  );
} 