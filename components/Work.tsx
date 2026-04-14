"use client";

import { useState } from "react";

const projects = [
  { id: 1, title: "Vanguard", category: "Crypto", year: "2025", image: "/projects/vanguard.jpg", description: "Brand identity and visual system for a crypto platform.", href: "#" },
  { id: 2, title: "Fabric", category: "Fintech", year: "2024", image: "/projects/fabric.jpg", description: "Product design and UX for a fintech application.", href: "#" },
  { id: 3, title: "Apex", category: "Software", year: "2022", image: "/projects/apex.jpg", description: "End-to-end UX design for a B2B software product.", href: "#" },
  { id: 4, title: "Essence", category: "Cosmetic", year: "2023", image: "/projects/essence.jpg", description: "Brand refresh and marketing campaign for a cosmetics brand.", href: "#" },
];

export default function Work() {
  return (
    <section id="work" style={{ padding: "clamp(60px, 8vw, 120px) clamp(20px, 4vw, 40px)", borderTop: "1px solid var(--border)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "clamp(32px, 5vw, 60px)" }}>
        <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "clamp(28px, 5vw, 56px)", letterSpacing: "-0.02em", textTransform: "uppercase", color: "var(--text)" }}>
          Works
        </h2>
        <span style={{ fontFamily: "'Merriweather', serif", fontSize: "0.85rem", fontStyle: "italic", color: "var(--text-muted)" }}>
          Selected projects
        </span>
      </div>

      <div className="work-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2px" }}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={project.href}
      style={{ display: "block", position: "relative", textDecoration: "none", overflow: "hidden", background: "var(--border)", aspectRatio: "4/3", cursor: "pointer" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={project.image}
        alt={project.title}
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)", transform: hovered ? "scale(1.04)" : "scale(1)" }}
        onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0"; }}
      />

      {/* Meta overlay — top */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "clamp(13px, 1.4vw, 16px)", color: "var(--text)", textShadow: "0 1px 8px rgba(0,0,0,0.8)" }}>
          {project.title}
        </span>
        <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
          <span className="tag">{project.category}</span>
          <span style={{ fontFamily: "Poppins", fontSize: "0.65rem", color: "var(--text-muted)" }}>{project.year}</span>
        </div>
      </div>

      {/* Hover overlay */}
      <div style={{ position: "absolute", inset: 0, background: "rgba(16,15,15,0.85)", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px", opacity: hovered ? 1 : 0, transition: "opacity 0.3s" }}>
        <p style={{ fontFamily: "'Merriweather', serif", fontSize: "clamp(13px, 1.2vw, 15px)", color: "var(--text)", textAlign: "center", lineHeight: 1.6 }}>
          {project.description}
        </p>
      </div>
    </a>
  );
}
