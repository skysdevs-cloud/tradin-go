import BlogSection from "@/compontes/BlogSection";
import PageHeading from "@/compontes/PageHeading";

export default function BlogPage() {
  return (
   <main>
       <PageHeading title="Blog"
  breadcrumb="Home – Blog"
  bgImage="/image/breadcrum-bg.jpg"/>
  <BlogSection/>
   </main>
  );
}
