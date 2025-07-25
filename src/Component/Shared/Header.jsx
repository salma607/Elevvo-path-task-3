import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const headerSx = {
    width: "100%",
    backgroundColor: "var(--color-header)",
    color: "var(--color-helper)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1.5rem 2.5rem",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 100,
    minHeight: "64px"
  };

  const logoBoxSx = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
  };

  const logoSx = {
    fontWeight: "700",
    fontSize: "1.7rem",
    letterSpacing: "1px",
    color: "var(--color-helper)",
    lineHeight: 1
  };

  const subHeaderSx = {
    color: "#666a70",
    fontSize: "1.1rem",
    marginLeft: 0, // Remove margin since it's stacked
    marginTop: "0.35rem"
  };

  const buttonSx = {
    padding: "0.65rem 2rem",
    backgroundColor: "var(--color-helper)",
    color: "var(--color-header)",
    border: "none",
    borderRadius: "0.5rem",
    fontWeight: "bold",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background 0.2s"
  };

  return (
    <header style={headerSx}>
      <div style={logoBoxSx}>
        <span style={logoSx}>TaskFlow</span>
        <span style={subHeaderSx}>Organize your day with ease.</span>
      </div>
      <button
        style={buttonSx}
        onClick={() => navigate("/Login")}
      >
        Get Started
      </button>
    </header>
  );
}