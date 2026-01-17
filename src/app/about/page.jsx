import FarmingGallery from "@/compontes/FarmingGallery";
import GreenPractices from "@/compontes/GreenPractices";
import PageHeading from "@/compontes/PageHeading";
import QualtiyCheck from "@/compontes/QualtiyCheck";
import TeamSection from "@/compontes/TeamSection";

export default function AboutPage() {
  return (
       <main>
        <PageHeading title="About"
  breadcrumb="Home – About"
  bgImage="/image/breadcrum-bg.jpg"/>
     <QualtiyCheck/>
     <GreenPractices/>
     <TeamSection/>
     <FarmingGallery/>
     
    </main>
  );
}
