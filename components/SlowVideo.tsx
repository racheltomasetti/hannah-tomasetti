"use client";

import { useEffect, useRef } from "react";

export default function SlowVideo({ src, rate = 0.5 }: { src: string; rate?: number }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.playbackRate = rate;
  }, [rate]);

  return (
    <video
      ref={ref}
      src={src}
      autoPlay
      loop
      muted
      playsInline
      style={{
        width: "100%",
        display: "block",
        filter: "invert(1)",
        mixBlendMode: "screen",
      }}
    />
  );
}
