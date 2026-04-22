import { projects } from "@/lib/projects";
import WorkCard from "@/components/WorkCard";

export const metadata = {
  title: "Works — Hannah Tomasetti",
};

export default function WorksPage() {
  const sorted = [...projects].filter((p) => !p.hidden).sort((a, b) => Number(b.year) - Number(a.year));

  return (
    <main style={{ paddingTop: "clamp(80px, 12vw, 140px)", paddingBottom: "clamp(60px, 8vw, 120px)", minHeight: "100vh" }}>
      <div style={{ padding: "0 clamp(20px, 4vw, 40px)" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "clamp(32px, 5vw, 60px)", paddingBottom: "clamp(20px, 3vw, 32px)" }}>
          <h1 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 900, fontSize: "clamp(32px, 7vw, 100px)", letterSpacing: "-0.02em", textTransform: "uppercase", color: "var(--text)", lineHeight: 1 }}>
            Works
          </h1>
          <span style={{ fontFamily: "'Merriweather', serif", fontSize: "0.85rem", fontStyle: "italic", color: "var(--text-muted)" }}>
            {sorted.length} projects
          </span>
        </div>

        {/* Grid */}
        <div className="work-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2px" }}>
          {sorted.map((project) => (
            <WorkCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
