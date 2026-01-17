import Image from "next/image";

export default function Gallery() {
     const galleryImages = [
  "/image/gallery1.jpg",
  "/image/gallery2.jpg",
  "/image/gallery3.jpg",
  "/image/gallery4.jpg",
  "/image/gallery5.jpg",
  "/image/gallery6.jpg",
  "/image/gallery7.jpg",
  "/image/gallery8.jpg",
  "/image/gallery9.jpg",
  "/image/gallery10.jpg",
  "/image/gallery11.jpg",
  "/image/gallery12.jpg",
];
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className="mb-6 overflow-hidden rounded-2xl group"
            >
              <Image
                src={src}
                alt="Gallery image"
                width={600}
                height={800}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
