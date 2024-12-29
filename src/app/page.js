import { ServicesPage } from "@/components/ServicesPage";
import Image from "next/image";
import ServiceIntro from "./components/Sections/ServiceIntroSection/ServiceIntro";

export default function Home() {
  return (
    <>

      <ServiceIntro />
    <ServicesPage></ServicesPage>

    </>
  );
}
