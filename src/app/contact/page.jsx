import ContactFormSection from "@/compontes/ContactFormSection";
import ContactGrid from "@/compontes/ContactGrid";
import FarmingGallery from "@/compontes/FarmingGallery";
import LocationMapSection from "@/compontes/LocationMapSection";
import PageHeading from "@/compontes/PageHeading";


export default function ContactPage() {
  return (
       <main>
        <PageHeading title="Contact"
  breadcrumb="Home – Contact"
  bgImage="/image/breadcrum-bg.jpg"/>
  <ContactGrid/>
  <ContactFormSection/>
  <LocationMapSection/>
     <FarmingGallery/>
     
    </main>
  );
}
