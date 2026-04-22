"use client";

const iconSize = { width: "clamp(24px, 4vw, 44px)", height: "clamp(24px, 4vw, 44px)", display: "block" } as const;
const iconLinkStyle = {
  color: "var(--text-muted)",
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  transition: "opacity 0.2s",
} as const;

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "clamp(40px, 5vw, 80px) clamp(20px, 4vw, 40px) 0",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* CTA block */}
      <div
        style={{
          textAlign: "center",
          maxWidth: "900px",
          margin: "0 auto",
          paddingBottom: "clamp(32px, 5vw, 60px)",
        }}
      >
        <h2
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            fontSize: "clamp(18px, 3vw, 32px)",
            letterSpacing: "-0.01em",
            color: "var(--text)",
            marginBottom: "36px",
          }}
        >
          connect for any work opportunities or collaborations:
        </h2>

        <div style={{ display: "inline-flex", alignItems: "center", gap: "clamp(16px, 2.5vw, 32px)" }}>
          <a
            href="mailto:hannaht1124@gmail.com"
            style={{
              fontFamily: "'Merriweather', serif",
              fontWeight: 700,
              fontStyle: "italic",
              fontSize: "clamp(18px, 3vw, 32px)",
              color: "var(--text)",
              textDecoration: "none",
              borderBottom: "2px solid var(--border)",
              paddingBottom: "4px",
              transition: "border-color 0.2s",
              display: "inline-block",
              lineHeight: 1.1,
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.borderColor = "var(--text)")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.borderColor = "var(--border)")
            }
          >
            hannaht1124@gmail.com
          </a>

          <a
            href="https://linkedin.com/in/hannah-tomasetti"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={iconLinkStyle}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.6")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              style={iconSize}
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>

        </div>
      </div>

    </section>
  );
}
