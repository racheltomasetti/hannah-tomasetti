type Props = {
  slides: string[];
  title: string;
};

/** Horizontal scroll-snap strip: full-bleed, minimal gap, hidden scrollbar. */
export default function OverviewCarousel({ slides, title }: Props) {
  if (slides.length === 0) return null;

  const gutter = "clamp(20px, 4vw, 40px)";
  const slideBasis = "min(32vw, 240px)";

  return (
    <div
      style={{
        width: `calc(100% + 2 * ${gutter})`,
        marginLeft: `calc(-1 * ${gutter})`,
        marginRight: `calc(-1 * ${gutter})`,
      }}
    >
      <div
        className="overview-carousel-scroll"
        style={{
          display: "flex",
          gap: 2,
          overflowX: "auto",
          overscrollBehaviorX: "contain",
          scrollSnapType: "x mandatory",
          scrollPaddingLeft: gutter,
          scrollPaddingRight: gutter,
          paddingLeft: gutter,
          paddingRight: gutter,
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {slides.map((src, i) => (
          <div
            key={src}
            style={{
              flex: `0 0 ${slideBasis}`,
              maxWidth: "100%",
              scrollSnapAlign: "start",
              scrollSnapStop: "always",
            }}
          >
            <img
              src={src}
              alt={`${title} — overview ${i + 1} of ${slides.length}`}
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
              style={{
                width: "100%",
                display: "block",
                objectFit: "contain",
                background: "transparent",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
