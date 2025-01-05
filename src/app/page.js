
import Image from "next/image";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/Sections/HeroSection";
import ServiceIntro from "./components/Sections/ServiceIntroSection/ServiceIntro";
import { ServicesPage } from "./components/Sections/ServicesSection/ServicesPage";
import WorkSection from "./components/Sections/OurWorksSection/WorkSection";
import ContactUs from "./components/Sections/ContactUs/contactus";

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
