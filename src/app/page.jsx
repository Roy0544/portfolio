import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import KeyboardSection from "@/components/sections/Keyboard";
import Qualifications from "@/components/sections/Qualifications";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="bg-neutral-950 min-h-screen">
      <Navbar />
      <Hero />
      {/* <KeyboardSection /> */}
      <Qualifications />
      <Projects />
      <Contact />
    </div>
  );
}
