import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hannah Tomasetti — Digital Designer",
  description:
    "Digital designer specializing in brand experiences that feel effortless & intuitive. UX, brand strategy, visual identity & marketing.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
