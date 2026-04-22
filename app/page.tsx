import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import About from "@/components/About";
import Contact from "@/components/Contact";
import KiFooter from "@/components/KiFooter";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Work />
      <About />
      <Contact />
      <KiFooter />
    </main>
  );
}
