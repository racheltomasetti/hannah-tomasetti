"use client";

import { useState } from "react";

/** Inset for nav buttons overlaid on the slide (does not narrow the slide vs overview / video images). */
const arrowInset = "clamp(8px, 2vw, 16px)";

export default function PitchDeck({ slides }: { slides: string[] }) {
  const [index, setIndex] = useState(0);

  if (slides.length === 0) return null;

  const atStart = index === 0;
  const atEnd = index === slides.length - 1;

  const prev = () => setIndex((i) => (i > 0 ? i - 1 : i));
  const next = () => setIndex((i) => (i < slides.length - 1 ? i + 1 : i));

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

      <div style={{ width: "100%", boxSizing: "border-box" }}>
        {/*
          Same horizontal track as imageBelowOverview / project videos: width 100% of the padded column,
          16:9 frame, object-fit contain. Arrows overlay the edges without shrinking the slide.
        */}
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16/9",
            background: "transparent",
            overflow: "hidden",
            lineHeight: 0,
          }}
        >
          <img
            src={slides[index]}
            alt={`Slide ${index + 1}`}
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "center",
              display: "block",
              background: "transparent",
            }}
          />
          <button
            type="button"
            onClick={prev}
            disabled={atStart}
            aria-label="Previous slide"
            aria-disabled={atStart}
            style={{
              position: "absolute",
              left: arrowInset,
              top: "50%",
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
              right: arrowInset,
              top: "50%",
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
        </div>

        <div
          style={{
            display: "flex",
            gap: "8px",
            justifyContent: "center",
            marginTop: "clamp(20px, 3vw, 32px)",
            position: "relative",
            zIndex: 1,
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
