"use client";

import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 32px",
        transition: "background 0.3s",
        background: scrolled ? "rgba(16, 15, 15, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      {/* Left */}
      <a href="#home" className="nav-pill">Home</a>

      {/* Center wordmark — hidden on mobile, shown on md+ */}
      <a
        href="#home"
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 700,
          fontSize: "0.8rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--text)",
          textDecoration: "none",
          opacity: scrolled ? 1 : 0,
          transition: "opacity 0.3s",
        }}
        className="hidden md:block"
      >
        Hannah Tomasetti
      </a>

      {/* Right */}
      <div style={{ display: "flex", gap: "10px" }}>
        <a href="#work" className="nav-pill">Works</a>
        <a href="#contact" className="nav-pill">Contact</a>
      </div>
    </nav>
  );
}
