import Gallery from "@/compontes/Gallery";
import PageHeading from "@/compontes/PageHeading";

export default function GalleryPage() {
  return (
      <main>
        <PageHeading title="Gallery"
  breadcrumb="Home – Gallery"
  bgImage="/image/breadcrum-bg.jpg"/>
  <Gallery/>
     
    </main>
  );
}
