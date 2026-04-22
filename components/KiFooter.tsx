"use client";

export default function KiFooter() {
  return (
    <footer
      style={{
        padding: "0 clamp(20px, 4vw, 40px) clamp(24px, 4vw, 48px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <a
        href="https://unlock-ki.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Unlock Ki"
        style={{
          display: "inline-flex",
          textDecoration: "none",
          transition: "opacity 0.2s",
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.6")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
      >
        <img
          src="/projects/logo light.png"
          alt="Unlock Ki"
          style={{
            width: "clamp(48px, 7vw, 96px)",
            height: "clamp(48px, 7vw, 96px)",
            objectFit: "contain",
            display: "block",
          }}
        />
      </a>
    </footer>
  );
}
