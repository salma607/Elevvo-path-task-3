import React from "react";
// MUI icon imports (install with: npm install @mui/icons-material @mui/material)
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
  const footerSx = {
    width: "100%",
    backgroundColor: "var(--color-header)",
    color: "var(--color-helper)",
    padding: "2rem 0 0.5rem 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "auto"
  };

  const rowSx = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "2.5rem",
    width: "100%",
    marginBottom: "1rem",
    flexWrap: "wrap"
  };

  const linksSx = {
    display: "flex",
    alignItems: "center",
    gap: "2.5rem",
    fontSize: "1rem"
  };

  const iconsRowSx = {
    display: "flex",
    alignItems: "center",
    gap: "1.2rem"
  };

  const iconSx = {
    fontSize: "1.7rem",
    color: "var(--color-helper)",
    margin: "0 0.3rem",
    transition: "color 0.2s",
    cursor: "pointer",
    verticalAlign: "middle"
  };

  return (
    <footer style={footerSx}>
      <div style={rowSx}>
        <div style={linksSx}>
          <a
            href="mailto:support@taskflow.com"
            style={{ color: "var(--color-helper)", textDecoration: "none", fontWeight: 500, display: "flex", alignItems: "center" }}
          >
            <EmailIcon style={{ ...iconSx, marginRight: "0.5rem" }} />
            support@taskflow.com
          </a>
          <a
            href="https://help.taskflow.com"
            style={{ color: "var(--color-helper)", textDecoration: "none", fontWeight: 500 }}
            target="_blank" rel="noopener noreferrer"
          >
            Help Center
          </a>
        </div>
        <div style={iconsRowSx}>
          <a
            href="https://facebook.com/taskflow"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FacebookIcon style={iconSx} />
          </a>
          <a
            href="https://twitter.com/taskflow"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <TwitterIcon style={iconSx} />
          </a>
          <a
            href="https://linkedin.com/company/taskflow"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon style={iconSx} />
          </a>
        </div>
      </div>
      <div style={{ color: "#888", fontSize: "0.97rem", marginTop: "0.5rem" }}>
        &copy; {new Date().getFullYear()} TaskFlow. All rights reserved.
      </div>
    </footer>
  );
}