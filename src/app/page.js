
import Image from "next/image";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/Sections/HeroSection";
import ServiceIntro from "./components/Sections/ServiceIntroSection/ServiceIntro";
import { ServicesPage } from "./components/Sections/ServicesSection/ServicesPage";
import WorkSection from "./components/Sections/OurWorksSection/WorkSection";
import ClientSection from "./components/Sections/ClientSection/ClientSection";
import ContactUs from "./components/Sections/ContactSection/ContactUs";
import ServiceIntro from "./components/Sections/ServiceIntroSection/ServiceIntro.js";
import { ServicesPage } from "./components/Sections/ServicesSection/ServicesPage.jsx";
import WorkSection from "./components/Sections/OurWorksSection/WorkSection.jsx";
import ContactUs from "./components/Sections/ContactUs/ContactUs.js";

export default function Home() {
 return (
  <div className="">
    <NavBar />
    <HeroSection />
  
      <ServiceIntro />
    <ServicesPage></ServicesPage>
    <WorkSection/>
    <ClientSection/>
    <ContactUs/>
  </div>
 )
}
