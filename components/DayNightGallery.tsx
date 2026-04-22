"use client";

import { useState } from "react";

type Props = {
  day: string[];
  night: string[];
  title: string;
};

const accent = "#c9922a";
const iconMuted = "rgba(246, 241, 230, 0.55)";

function IconSun({ active }: { active: boolean }) {
  const c = active ? accent : iconMuted;
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden style={{ display: "block" }}>
      <circle cx="12" cy="12" r="3.25" stroke={c} strokeWidth="1.35" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const x1 = 12 + Math.cos(rad) * 6.25;
        const y1 = 12 + Math.sin(rad) * 6.25;
        const x2 = 12 + Math.cos(rad) * 8.75;
        const y2 = 12 + Math.sin(rad) * 8.75;
        return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke={c} strokeWidth="1.35" strokeLinecap="round" />;
      })}
    </svg>
  );
}

function IconMoon({ active }: { active: boolean }) {
  const c = active ? accent : iconMuted;
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden style={{ display: "block" }}>
      <path
        d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
        stroke={c}
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function DayNightGallery({ day, night, title }: Props) {
  const [mode, setMode] = useState<"day" | "night">("day");
  const images = mode === "day" ? day : night;

  if (day.length === 0 && night.length === 0) return null;

  return (
    <div>
      <h2
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 900,
          fontSize: "clamp(2.25rem, 6vw, 3.75rem)",
          lineHeight: 1.15,
          letterSpacing: "-0.02em",
          color: "var(--text)",
          textAlign: "center",
          marginBottom: "clamp(12px, 2vw, 18px)",
        }}
      >
        Find your flow.
      </h2>

      <p
        style={{
          fontFamily: "'Merriweather', serif",
          fontWeight: 300,
          fontSize: "clamp(17px, 1.65vw, 20px)",
          lineHeight: 1.55,
          color: "var(--text-muted)",
          textAlign: "center",
          maxWidth: "36em",
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "clamp(24px, 3vw, 36px)",
          letterSpacing: "0.01em",
        }}
      >
        {mode === "day" ? "Your day starts here. Chart your course." : "A world of your own. The Grotto after dark."}
      </p>

      <div style={{ display: "flex", justifyContent: "center", marginBottom: "clamp(28px, 4vw, 44px)" }}>
        <div
          role="tablist"
          aria-label="Day or night photos"
          style={{
            display: "flex",
            alignItems: "center",
            background: "rgba(42, 40, 38, 0.55)",
            border: "1px solid var(--border)",
            borderRadius: "999px",
            padding: "5px",
            gap: "4px",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
          }}
        >
          {(["day", "night"] as const).map((m) => {
            const selected = mode === m;
            return (
              <button
                key={m}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setMode(m)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "46px",
                  height: "46px",
                  borderRadius: "999px",
                  border: "none",
                  background: selected ? "rgba(16, 15, 15, 0.92)" : "transparent",
                  boxShadow: selected ? "0 1px 3px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.06)" : "none",
                  cursor: "pointer",
                  transition: "background 0.2s ease, box-shadow 0.2s ease",
                }}
                aria-label={m === "day" ? "Day photos" : "Night photos"}
              >
                {m === "day" ? <IconSun active={selected} /> : <IconMoon active={selected} />}
              </button>
            );
          })}
        </div>
      </div>

      <div className="day-night-gallery-masonry">
        {images.map((src, i) => (
          <div key={src} className="day-night-gallery-masonry__item">
            <img
              src={src}
              alt={`${title} — ${mode} ${i + 1}`}
              loading={i < 3 ? "eager" : "lazy"}
              decoding="async"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
