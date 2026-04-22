"use client";

type Props = {
  sources: string[];
  projectTitle: string;
};

/** Muted autoplay (browser policy), loops continuously. */
function OverviewInlineVideo({ src, projectTitle }: { src: string; projectTitle: string }) {
  return (
    <video
      src={src}
      muted
      playsInline
      autoPlay
      loop
      preload="auto"
      controls={false}
      aria-label={`${projectTitle} motion preview`}
      style={{ width: "100%", display: "block", background: "var(--border)" }}
    />
  );
}

export default function VideosBelowOverview({ sources, projectTitle }: Props) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      {sources.map((src) => (
        <OverviewInlineVideo key={src} src={src} projectTitle={projectTitle} />
      ))}
    </div>
  );
}
