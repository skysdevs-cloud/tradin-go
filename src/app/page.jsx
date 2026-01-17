import AgricultureProcess from "@/compontes/AgricultureProcess";
import BeforeAfterSection from "@/compontes/BeforeAfterSection";
import FarmingGallery from "@/compontes/FarmingGallery";
import QualtiyCheck from "@/compontes/QualtiyCheck";
import ServiceSlider from "@/compontes/ServiceSlider";
import SlidrBox from "@/compontes/SlidrBox";

export default function Home() {
  return (
    <main>
     <SlidrBox/>
     <QualtiyCheck/>
     <ServiceSlider/>
     <AgricultureProcess/>
     <FarmingGallery/>
     <BeforeAfterSection/>
    </main>
  );
}
