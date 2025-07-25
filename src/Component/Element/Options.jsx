import React, { useState } from "react";
import  { useNavigate } from "react-router-dom";

// Options for checkboxes
const options = [
  "Project management",
  "Task management",
  "Client projects",
  "Business operations",
  "Resource management",
  "Portfolio management",
  "Goals & strategy",
  "Requests & approvals",
  "Create your own"
];

export default function Options() {
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();

  const handleToggle = (option) => {
    setSelected((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option]
    );
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--color-secondary)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2vw"
      }}
    >
      <h1
        style={{
          fontWeight: 900,
          fontSize: "3.2rem",
          textAlign: "center",
          marginBottom: "1.25rem",
          letterSpacing: "-2px",
           color: "var(--color-header)",
        }}
      >
        Project management made easy
      </h1>
      <p
        style={{
          color: "var(--color-header)",
          fontSize: "1.35rem",
          marginBottom: "2.5rem",
          textAlign: "center"
        }}
      >
        Manage simple to complex projects and everything in between with Taskflow.com
      </p>
      <div
        style={{
          fontWeight: 700,
          fontSize: "1.23rem",
          marginBottom: "1.6rem",
          textAlign: "center",
           color: "var(--color-header)",
        }}
      >
        <span style={{ fontWeight: 600 }}>
          Select what you want to manage:
        </span>
      </div>
      {/* Options */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1.2rem 1.5rem",
          justifyContent: "center",
          marginBottom: "2.5rem",
          maxWidth: "1200px",
        }}
      >
        {options.map((option) => (
          <label
            key={option}
            style={{
              display: "flex",
              alignItems: "center",
              border: "2px solid var(--color-helper)",
              borderRadius: "2.3rem",
              padding: "0.65rem 1.8rem",
              fontSize: "0.80rem",
              cursor: "pointer",
              background: "var(--color-header)",
              color: "var(--color-helper)",
              transition: "border 0.2s, box-shadow 0.2s",
              boxShadow: selected.includes(option)
                ? "0 0 0 2px var(--color-header)"
                : "none"
            }}
          >
            <input
              type="checkbox"
              checked={selected.includes(option)}
              onChange={() => handleToggle(option)}
              style={{
                accentColor: "var(--color-helper)",
                width: "1.25rem",
                height: "1.25rem",
                marginRight: "0.75rem"
              }}
            />
            {option}
          </label>
        ))}
      </div>
      <button
        style={{
          background: "var(--color-helper)",
          color: "var(--color-header)",
          fontWeight: "bold",
          fontSize: "1rem",
          padding: "0.65rem 2rem",
          borderRadius: "0.5rem",
          cursor: "pointer",
          marginTop: "0.5rem",
          transition: "background 0.2s"
        }}
        
        onClick={() => navigate("/Login")}
      >
        Get started <span style={{ fontSize: "1rem", marginLeft: "0.5em" }}>→</span>
      </button>
    </div>
  );
}