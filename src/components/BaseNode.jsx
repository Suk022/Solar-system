import React from "react";

const BaseNode = ({
  isOpen,
  onClose,
  children,
  position = "right",
  width = "450px",
  title,
  showCloseButton = true,
}) => {
  // Base styles for the sidebar container
  const sidebarStyle = {
    position: "fixed",
    [position]: 0,
    top: 0,
    bottom: 0,
    width: width,
    backgroundColor: "rgba(18, 18, 19, 0.97)",
    borderLeft: position === "right" ? "1px solid #444" : "none",
    borderRight: position === "left" ? "1px solid #444" : "none",
    padding: "2rem",
    color: "#fff",
    transform: position === "right" ? "translateX(100%)" : "translateX(-100%)",
    transition: "transform 0.3s ease-in-out",
    overflowY: "auto",
    zIndex: 1000,
    backdropFilter: "blur(10px)",
  };

  const openSidebarStyle = {
    transform: "translateX(0)",
  };

  const closeBtnStyle = {
    position: "absolute",
    top: "1rem",
    right: "1rem",
    background: "none",
    border: "none",
    color: "#fff",
    fontSize: "1.5rem",
    cursor: "pointer",
    padding: "0.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  };

  const titleStyle = {
    fontSize: "2.5rem",
    marginBottom: "1rem",
    background: "linear-gradient(45deg, #ff6b6b, #4ecdc4)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: "bold",
  };

  const combinedStyle = {
    ...sidebarStyle,
    ...(isOpen ? openSidebarStyle : {}),
  };

  return (
    <div style={combinedStyle}>
      {showCloseButton && (
        <button style={closeBtnStyle} onClick={onClose}>
          ×
        </button>
      )}
      {title && <h1 style={titleStyle}>{title}</h1>}
      {children}
    </div>
  );
};

export default BaseNode;
