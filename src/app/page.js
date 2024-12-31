import NavBar from "@/components/NavBar";

import HeroSection from "@/components/Sections/HeroSection";

export default function Home() {
  return (
    <main className="w-full h-full relative">
      <NavBar />

      {/* Sections */}
      <HeroSection />
    </main>
  );
}
