"use client";

import { useState } from "react";
import Link from "next/link";
import type { Project } from "@/lib/projects";

export default function WorkCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/work/${project.slug}`}
      style={{ display: "block", position: "relative", textDecoration: "none", overflow: "hidden", background: "var(--border)", aspectRatio: "4/3", cursor: "pointer" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={project.coverImage}
        alt={project.title}
        style={{
          width: "100%", height: "100%", objectFit: "cover", display: "block",
          objectPosition: project.thumbnailObjectPosition ?? "center",
          transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          transform: hovered ? "scale(1.04)" : "scale(1)",
        }}
      />

      {/* Meta overlay — top */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "clamp(13px, 1.4vw, 16px)", color: "var(--text)", textShadow: "0 1px 8px rgba(0,0,0,0.8)" }}>
          {project.title}
        </span>
        <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
          {project.category && <span className="tag" style={{ background: "rgba(246,241,230,0.75)" }}>{project.category}</span>}
          <span style={{ fontFamily: "Poppins", fontSize: "0.65rem", color: project.yearTextLight ? "var(--text)" : "var(--bg)", textShadow: project.yearTextLight ? "0 1px 8px rgba(0,0,0,0.8)" : "none" }}>{project.year}</span>
        </div>
      </div>

      {/* Hover overlay */}
      <div style={{
        position: "absolute", inset: 0, background: "rgba(16,15,15,0.6)",
        display: "flex", alignItems: "flex-end", justifyContent: "flex-start", padding: "20px",
        opacity: hovered ? 1 : 0, transition: "opacity 0.3s",
      }}>
        <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text)" }}>
          View project →
        </span>
      </div>
    </Link>
  );
}
