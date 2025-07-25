import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import IMAGE_URL from "../../../src/assets/task.jpg"; // Adjust the path as necessary

export default function Signup() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Smaller input/button styles for a more compact form
  const inputSx = {
    width: "100%",
    border: "1px solid var(--color-helper)",
    outline: "none",
    fontSize: "1rem",
    padding: "0.65rem 0.75rem",
    marginBottom: "0.5rem",
    borderRadius: "0.375rem",
    background: "none",
    color: "inherit",
    boxSizing: "border-box"
  };

  const buttonSx = {
    width: "100%",
    backgroundColor: "var(--color-helper)",
    color: "var(--color-header)",
    cursor: "pointer",
    fontSize: "1rem",
    padding: "0.7rem",
    marginTop: "0.5rem",
    border: "none",
    borderRadius: "0.375rem",
    fontWeight: 600
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div
      className="flex min-h-screen"
      style={{
        backgroundColor: "var(--color-secondary)",
        minHeight: "100vh",
        width: "100vw",
      }}
    >
      {/* Image - 1/4 of the page */}
      <div
        className="hidden md:flex items-center justify-center"
        style={{
          flex: "1 1 0%",
          maxWidth: "25vw",
          width: "25vw",
          minWidth: "240px",
          background: `url(${IMAGE_URL}) center center / cover no-repeat`,
          minHeight: "100vh",
        }}
      />

      {/* Form - 3/4 of the page */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-1 flex-col justify-center items-center"
        style={{
          flex: "3 1 0%",
          maxWidth: "75vw",
          width: "75vw",
          backgroundColor: "var(--color-header)",
          minHeight: "100vh",
          borderRadius: 0,
          boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
        }}
      >
        <div style={{ width: "100%", maxWidth: 340, padding: "0 1rem" }}>
          <h2
            className="text-2xl font-bold text-center"
            style={{ color: "var(--color-helper)", fontSize: "1.65rem"}}
          >
            Sign Up
          </h2>
          <div className="mb-4">
            <label htmlFor="firstName" className="block font-semibold mb-2" style={{ color: "var(--color-helper)", fontSize: "1rem" }}>
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              style={inputSx}
              value={form.firstName}
              onChange={handleChange}
              required
              placeholder="Enter your first name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block font-semibold mb-2" style={{ color: "var(--color-helper)", fontSize: "1rem" }}>
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              style={inputSx}
              value={form.lastName}
              onChange={handleChange}
              required
              placeholder="Enter your last name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-semibold mb-2" style={{ color: "var(--color-helper)", fontSize: "1rem" }}>
              Email
            </label>
            <input
              type="email"
              id="email"
              style={inputSx}
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block font-semibold mb-2" style={{ color: "var(--color-helper)", fontSize: "1rem" }}>
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              style={inputSx}
              value={form.phone}
              onChange={handleChange}
              required
              placeholder="Enter your phone number"
            />
          </div>
          <div style={{ marginBottom: "1.2rem" }}>
            <label htmlFor="password" className="block font-semibold mb-2" style={{ color: "var(--color-helper)", fontSize: "1rem" }}>
              Password
            </label>
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                style={{ ...inputSx, marginBottom: 0, paddingRight: "2.5rem" }}
                value={form.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
                autoComplete="new-password"
              />
              <IconButton
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword(show => !show)}
                edge="end"
                tabIndex={-1}
                style={{
                  position: "absolute",
                  right: "8px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: "1.2rem"
                }}
                size="small"
              >
                {showPassword ? <VisibilityOff fontSize="inherit" /> : <Visibility fontSize="inherit" />}
              </IconButton>
            </div>
          </div>
          <button type="submit" style={buttonSx}>
            Sign Up
          </button>
          <div className="mt-4 text-center">
            <span style={{ color: "var(--color-helper)", fontSize: "0.99rem" }}>
              Already have an account?{" "}
              <span
                style={{ color: "#666a70", cursor: "pointer", fontWeight: 600 }}
                onClick={() => navigate("/Login")}
              >
                Login
              </span>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}