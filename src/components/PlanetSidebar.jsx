import React, { useState, useEffect } from "react";
import BaseSidebar from "./BaseSidebar";
import { fetchPlanetData } from "../api/nasa";

// Reusable styles
const sectionStyle = {
  marginBottom: "2rem",
  padding: "1rem",
  background: "rgba(255, 255, 255, 0.03)",
  borderRadius: "8px",
};

const sectionTitleStyle = {
  fontSize: "1.2rem",
  color: "#4ecdc4",
  marginBottom: "1rem",
  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
  paddingBottom: "0.5rem",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "0.5rem",
};

const metricStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: "0.5rem",
  background: "rgba(255, 255, 255, 0.05)",
  borderRadius: "4px",
  fontSize: "0.9rem",
};

const galleryGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "0.5rem",
};

const galleryImageStyle = {
  width: "100%",
  height: "120px",
  objectFit: "cover",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "transform 0.2s",
};

const factImageStyle = {
  width: "100%",
  height: "200px",
  objectFit: "cover",
  borderRadius: "8px",
  marginBottom: "1rem",
};

const PlanetSidebar = ({ planet, isOpen, onClose }) => {
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

  const truncateText = (text, maxWords = 100) => {
    const words = text.split(" ");
    if (words.length <= maxWords) {
      return { text: text, isTruncated: false };
    }
    return {
      text: words.slice(0, maxWords).join(" ") + "...",
      isTruncated: true,
    };
  };

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleToggleOverview = () => {
    setIsOverviewExpanded(!isOverviewExpanded);
  };

  if (!planet) return null;

  return (
    <BaseSidebar isOpen={isOpen} onClose={onClose} title={planet.name}>
      {/* Introduction */}
      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Overview</h2>
        {planet.description ? (
          <div style={{ fontSize: "0.9rem", color: "#ccc", lineHeight: "1.6" }}>
            {(() => {
              const { text, isTruncated } = truncateText(
                planet.description,
                150,
              );
              return (
                <>
                  <p>{isOverviewExpanded ? planet.description : text}</p>
                  {isTruncated && (
                    <button
                      onClick={handleToggleOverview}
                      style={{
                        background: "none",
                        border: "none",
                        color: "#4ecdc4",
                        cursor: "pointer",
                        fontSize: "0.9rem",
                        textDecoration: "underline",
                        padding: "0",
                        marginTop: "0.5rem",
                      }}
                    >
                      {isOverviewExpanded ? "Show less" : "Read more"}
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
        <div style={{ fontSize: "0.9rem", color: "#ccc" }}>
          {planet.facts.slice(0, 3).map((fact, index) => (
            <p
              key={index}
              style={{
                marginBottom: "0.5rem",
                paddingLeft: "1rem",
                borderLeft: "2px solid #4ecdc4",
              }}
            >
              {fact}
            </p>
          ))}
        </div>
      </div>

      {/* Live Planet Gallery */}
      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Live Planet Gallery</h2>
        {loading ? (
          <p>Loading gallery...</p>
        ) : (
          <div style={galleryGridStyle}>
            {nasaData.gallery.map((img, index) => (
              <a
                href={img.href}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
              >
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
          {planet.physicalCharacteristics &&
            Object.entries(planet.physicalCharacteristics).map(
              ([key, value]) => (
                <div key={key} style={metricStyle}>
                  <span>{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
                  <span>{value}</span>
                </div>
              ),
            )}
        </div>
      </div>

      {/* Atmosphere & Surface */}
      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Atmosphere & Surface</h2>
        {planet.atmosphere && (
          <>
            <h3 style={{ ...sectionTitleStyle, fontSize: "1rem" }}>
              Atmosphere
            </h3>
            <p>Composition: {planet.atmosphere.composition}</p>
            <p>Pressure: {planet.atmosphere.pressure}</p>
          </>
        )}
        {planet.surface && (
          <>
            <h3
              style={{
                ...sectionTitleStyle,
                fontSize: "1rem",
                marginTop: "1rem",
              }}
            >
              Surface
            </h3>
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
          <p>
            <strong>Missions:</strong> {planet.exploration.missions.join(", ")}
          </p>
          <p>
            <strong>Discoveries:</strong> {planet.exploration.discoveries}
          </p>
        </div>
      )}

      {/* Cultural Impact */}
      {planet.culturalImpact && (
        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Cultural Impact</h2>
          {planet.culturalImpact.mythology && (
            <p>
              <strong>Mythology:</strong> {planet.culturalImpact.mythology}
            </p>
          )}
          {planet.culturalImpact.inMedia && (
            <p>
              <strong>In Media:</strong>{" "}
              {planet.culturalImpact.inMedia.join(", ")}
            </p>
          )}
          {planet.culturalImpact.symbolism && (
            <p>
              <strong>Symbolism:</strong> {planet.culturalImpact.symbolism}
            </p>
          )}
        </div>
      )}

      {/* Featured Fact / Event */}
      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Featured Fact / Event</h2>
        {loading ? (
          <p>Loading fact...</p>
        ) : nasaData.fact ? (
          <div>
            <img
              src={nasaData.fact.url}
              alt={nasaData.fact.title}
              style={factImageStyle}
            />
            <h3
              style={{
                fontSize: "1.1rem",
                marginBottom: "0.5rem",
                color: "#4ecdc4",
              }}
            >
              {nasaData.fact.title}
            </h3>
            <div style={{ fontSize: "0.9rem", color: "#ccc" }}>
              {(() => {
                const { text, isTruncated } = truncateText(
                  nasaData.fact.explanation,
                );
                return (
                  <>
                    <p>{isExpanded ? nasaData.fact.explanation : text}</p>
                    {isTruncated && (
                      <button
                        onClick={handleToggleExpand}
                        style={{
                          background: "none",
                          border: "none",
                          color: "#4ecdc4",
                          cursor: "pointer",
                          fontSize: "0.9rem",
                          textDecoration: "underline",
                          padding: "0",
                          marginTop: "0.5rem",
                        }}
                      >
                        {isExpanded ? "Show less" : "Read more"}
                      </button>
                    )}
                  </>
                );
              })()}
            </div>
          </div>
        ) : (
          <p>
            No special event or fact could be found for {planet.name} at this
            time.
          </p>
        )}
      </div>
    </BaseSidebar>
  );
};

export default PlanetSidebar;
