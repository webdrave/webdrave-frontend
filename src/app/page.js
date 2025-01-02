
import Image from "next/image";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/Sections/HeroSection";
import ServiceIntro from "./components/Sections/ServiceIntroSection/ServiceIntro";
import { ServicesPage } from "./components/Services/ServicesPage";

export default function Home() {
  return (
    <main className="w-full h-full relative">
    <NavBar />
    <HeroSection />
  
      <ServiceIntro />
    <ServicesPage></ServicesPage>

    </>
  );
}
