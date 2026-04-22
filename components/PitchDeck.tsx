"use client";

import { useState } from "react";

/** Matches project page horizontal padding so deck can break out while label stays aligned. */
const pagePad = "clamp(20px, 4vw, 40px)";

/** Visual scale for the slide (arrows stay 40px; slide grows from center). */
const DECK_SCALE = 1.54;

/** Half of (scale − 1): transform paints this fraction of slide height above & below the layout box. */
const HALF_SCALE_DELTA = (DECK_SCALE - 1) / 2;

/** Four gutters (edge–arrow and arrow–slide, both sides) using the same inset as the page. */
const fourGutters = `(${pagePad} + ${pagePad} + ${pagePad} + ${pagePad})`;

export default function PitchDeck({ slides }: { slides: string[] }) {
  const [index, setIndex] = useState(0);

  if (slides.length === 0) return null;

  const atStart = index === 0;
  const atEnd = index === slides.length - 1;

  const prev = () => setIndex((i) => (i > 0 ? i - 1 : i));
  const next = () => setIndex((i) => (i < slides.length - 1 ? i + 1 : i));

  /** Shared width expression (one calc — avoid nesting calc inside calc). */
  const slideW = `(100% - 80px - ${fourGutters})`;
  /** Vertical bleed from scale(origin center): reserve this much above & below the layout box. */
  const scaledVertBleed = `calc(${slideW} * 9 / 16 * ${HALF_SCALE_DELTA})`;
  /** Arrow axis through the slide’s layout center (below top padding). */
  const arrowTop = `calc(${slideW} * (9 / 16 * ${HALF_SCALE_DELTA} + 9 / 32))`;

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "clamp(20px, 3vw, 32px)" }}>
        <p style={{ fontFamily: "'Merriweather', serif", fontSize: "clamp(13px, 1.2vw, 15px)", fontStyle: "italic", color: "var(--text-muted)", letterSpacing: "0.02em" }}>
          Process deck
        </p>
        <span style={{ fontFamily: "Poppins", fontSize: "0.7rem", color: "var(--text-muted)" }}>
          {index + 1} / {slides.length}
        </span>
      </div>

      <div
        style={{
          width: `calc(100% + ${pagePad} + ${pagePad})`,
          marginLeft: `calc(0px - ${pagePad})`,
          marginRight: `calc(0px - ${pagePad})`,
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            position: "relative",
            overflow: "visible",
            boxSizing: "border-box",
            paddingTop: scaledVertBleed,
            /* Bottom bleed lives in padding so layout clears the scaled slide; avoids overlap with dots. */
            paddingBottom: scaledVertBleed,
          }}
        >
          <button
            type="button"
            onClick={prev}
            disabled={atStart}
            aria-label="Previous slide"
            aria-disabled={atStart}
            style={{
              position: "absolute",
              left: pagePad,
              top: arrowTop,
              transform: "translateY(-50%)",
              zIndex: 2,
              background: atStart ? "rgba(16,15,15,0.35)" : "rgba(16,15,15,0.7)",
              border: "1px solid var(--border)",
              color: atStart ? "var(--text-muted)" : "var(--text)",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              cursor: atStart ? "not-allowed" : "pointer",
              fontFamily: "Poppins",
              fontSize: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.2s, opacity 0.2s",
              opacity: atStart ? 0.5 : 1,
            }}
          >
            ←
          </button>
          <button
            type="button"
            onClick={next}
            disabled={atEnd}
            aria-label="Next slide"
            aria-disabled={atEnd}
            style={{
              position: "absolute",
              right: pagePad,
              top: arrowTop,
              transform: "translateY(-50%)",
              zIndex: 2,
              background: atEnd ? "rgba(16,15,15,0.35)" : "rgba(16,15,15,0.7)",
              border: "1px solid var(--border)",
              color: atEnd ? "var(--text-muted)" : "var(--text)",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              cursor: atEnd ? "not-allowed" : "pointer",
              fontFamily: "Poppins",
              fontSize: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.2s, opacity 0.2s",
              opacity: atEnd ? 0.5 : 1,
            }}
          >
            →
          </button>

          <div
            style={{
              width: `calc(${slideW})`,
              marginLeft: "auto",
              marginRight: "auto",
              aspectRatio: "16/9",
              transform: `scale(${DECK_SCALE})`,
              transformOrigin: "center center",
              background: "transparent",
              overflow: "hidden",
            }}
          >
            <img
              src={slides[index]}
              alt={`Slide ${index + 1}`}
              style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "8px",
            justifyContent: "center",
            marginTop: "clamp(36px, 5vw, 56px)",
            position: "relative",
            zIndex: 3,
          }}
        >
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: i === index ? "20px" : "6px",
                height: "6px",
                borderRadius: "999px",
                border: "none",
                cursor: "pointer",
                background: i === index ? "var(--text)" : "var(--border)",
                transition: "all 0.3s",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
