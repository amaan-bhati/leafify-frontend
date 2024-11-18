import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { RedirectSection } from "@/components/RedirectSection";
import { ScrollLines } from "@/components/ScrollLines";
// import Image from "next/image";

export default function Home() {
  return (
    <>
   <HeroSection/>
   <ScrollLines/>
   <AboutSection/>
   <RedirectSection/>
   <Footer/>
   </>

  );
}
