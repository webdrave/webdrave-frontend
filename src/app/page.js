
import Image from "next/image";
import ServiceIntro from "./components/Sections/ServiceIntroSection/ServiceIntro";
import { ServicesPage } from "./components/Services/ServicesPage";

export default function Home() {
  return (
    <>

      <ServiceIntro />
    <ServicesPage></ServicesPage>

    </>
  );
}
