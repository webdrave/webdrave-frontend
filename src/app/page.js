
import Image from "next/image";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/Sections/HeroSection/index";
import ClientSection from "./components/Sections/ClientSection/ClientSection";
import ServiceIntro from "./components/Sections/ServiceIntroSection/ServiceIntro.js";
import { ServicesPage } from "./components/Sections/ServicesSection/ServicesPage.jsx";
import WorkSection from "./components/Sections/OurWorksSection/WorkSection.jsx";
import ContactUs from "./components/Sections/ContactSection/ContactUs.js";
import {BackgroundLight} from "./components/LightComponent";

export default function Home() {
 return (
  <div className="overflow-x-hidden relative">
      <BackgroundLight size="250px" blur="150px" top="0" left="-100px" />
      <BackgroundLight size="350px" blur="150px" top="100vh" right="-100px" />
      <BackgroundLight size="250px" blur="300px" top="120vh" left="-100px" />

      <BackgroundLight size="250px" blur="250px" top="20vh" right="-100px" />

      <BackgroundLight size="400px" blur="250px" bottom="400px" right="-400px" />
      <BackgroundLight size="250px" blur="150px" bottom="210vh" right="-200px" />
      <BackgroundLight size="250px" blur="150px" bottom="210vh" right="-100px" />
      <BackgroundLight size="250px" blur="150px" top="330vh" right="-100px" />
      <BackgroundLight size="250px" blur="250px" top="270vh" left="-100px" />



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
