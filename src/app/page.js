
import Image from "next/image";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/Sections/HeroSection";
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
    <ContactUs/>
  </div>
 )
}
