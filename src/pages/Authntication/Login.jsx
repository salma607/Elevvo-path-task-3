import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { GoogleLogin } from "@react-oauth/google";
import IMAGE_URL from "../../../src/assets/task.jpg"; // Adjust the path as necessary

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle actual login here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const handleGoogleLoginSuccess = (response) => {
    console.log("Google Login Success:", response);
    // Handle Google login success (e.g., send token to your backend)
  };

  const handleGoogleLoginFailure = (error) => {
    console.error("Google Login Failed:", error);
  };

  const inputSx = {
    width: "100%",
    border: "1px solid var(--color-helper)",
    outline: "none"
  };

  const buttonSx = {
    width: "100%",
    backgroundColor: "var(--color-helper)",
    color: "var(--color-header)",
    cursor: "pointer"
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
      >
        {/* Optional overlay/logo here */}
      </div>

      {/* Form - 3/4 of the page (no wrapper div, form fills 3/4 space directly) */}
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
        <div style={{ width: "100%", maxWidth: 400, padding: "0 2rem" }}>
          <h2
            className="text-2xl font-bold mb-6 text-center"
            style={{ color: "var(--color-helper)" }}
          >
            TaskFlow
          </h2>
          <p className="text-center mb-6" style={{ color: "var(--color-secondary)" }}>
            helping you plan, prioritize, and power through your day with ease
          </p>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block font-semibold mb-2"
              style={{ color: "var(--color-helper)" }}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="p-3 rounded"
              style={inputSx}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block font-semibold mb-2"
              style={{ color: "var(--color-helper)" }}
            >
              Password
            </label>
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="p-3 rounded pr-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
                style={inputSx}
                autoComplete="current-password"
              />
              <IconButton
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword((show) => !show)}
                edge="end"
                tabIndex={-1}
                style={{
                  position: "absolute",
                  right: "8px",
                  top: "50%",
                  transform: "translateY(-50%)"
                }}
                size="small"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </div>
          </div>
          <button
            type="submit"
            className="py-3 rounded"
            style={buttonSx}
          
          >
            Login
          </button>

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", margin: "1.5rem 0" }}>
            <hr style={{ flex: 1, border: "none", borderTop: "1px solid var(--color-helper)" }} />
            <span style={{ margin: "0 1rem", color: "var(--color-helper)" }}>or</span>
            <hr style={{ flex: 1, border: "none", borderTop: "1px solid var(--color-helper)" }} />
          </div>

          {/* Google Login Button */}
          <div className="flex flex-col items-center ">
            <GoogleLogin
              onSuccess={handleGoogleLoginSuccess}
              onError={handleGoogleLoginFailure}
              width="100%"
              // Add any additional props you need
            />
          </div>

          <div className="mt-4 text-center">
            <span style={{ color: "var(--color-helper)" }}>
              Don't have an account?{" "}
              <span
                style={{ color: "var(--color-main)", cursor: "pointer" }}
                onClick={() => navigate("/signup")}
              >
                Sign up
              </span>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}