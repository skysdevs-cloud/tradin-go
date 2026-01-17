import Image from "next/image";
import { Leaf } from "lucide-react";
import SpotlightButton from "./SpotlightButton";

export default function FarmingGallery() {
  return (
    <section className="py-16">
      <div className="max-w-[1540px] mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm tracking-widest text-green-600 font-medium uppercase">
            Field Innovation
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mt-2">
            Our Farming Excellence
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[180px]">

          {/* Image 1 */}
          <div className="relative row-span-2 rounded-3xl overflow-hidden group">
            <Image
              src="/image/galaryImg1.jpg"
              alt="Farming Image"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-500" />

            <div className="absolute inset-0 flex items-center justify-center
                            opacity-0 translate-y-4
                            group-hover:opacity-100 group-hover:translate-y-0
                            transition-all duration-500">
              <SpotlightButton
                bgColor="bg-white"
                text="Have A Gallary"
                href="/services"
              />
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative rounded-3xl overflow-hidden group">
            <Image
              src="/image/galaryImg2.jpg"
              alt="Farming Image"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-500" />

            <div className="absolute inset-0 flex items-center justify-center
                            opacity-0 scale-95
                            group-hover:opacity-100 group-hover:scale-100
                            transition-all duration-500">
              <SpotlightButton
                bgColor="bg-white"
                text="Have A Gallary"
                href="/services"
              />
            </div>
          </div>

          {/* Image 3 */}
          <div className="relative row-span-2 rounded-3xl overflow-hidden group">
            <Image
              src="/image/galaryImg3.jpg"
              alt="Farming Image"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-500" />

            <div className="absolute inset-0 flex items-center justify-center
                            opacity-0 translate-y-4
                            group-hover:opacity-100 group-hover:translate-y-0
                            transition-all duration-500">
              <SpotlightButton
                bgColor="bg-white"
                text="Have A Gallary"
                href="/services"
              />
            </div>
          </div>

          {/* Image 4 */}
          <div className="relative rounded-3xl overflow-hidden group">
            <Image
              src="/image/galaryImg4.jpg"
              alt="Farming Image"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-500" />

            <div className="absolute inset-0 flex items-center justify-center
                            opacity-0 scale-95
                            group-hover:opacity-100 group-hover:scale-100
                            transition-all duration-500">
              <SpotlightButton
                bgColor="bg-white"
                text="Have A Gallary"
                href="/services"
              />
            </div>
          </div>

          {/* Image 5 */}
          <div className="relative rounded-3xl overflow-hidden group">
            <Image
              src="/image/galaryImg5.jpg"
              alt="Farming Image"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-500" />

            <div className="absolute inset-0 flex items-center justify-center
                            opacity-0 scale-95
                            group-hover:opacity-100 group-hover:scale-100
                            transition-all duration-500">
              <SpotlightButton
                bgColor="bg-white"
                text="Have A Gallary"
                href="/services"
              />
            </div>
          </div>

          {/* Image 6 */}
          <div className="relative rounded-3xl overflow-hidden group">
            <Image
              src="/image/galaryImg6.jpg"
              alt="Farming Image"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-500" />

            <div className="absolute inset-0 flex items-center justify-center
                            opacity-0 scale-95
                            group-hover:opacity-100 group-hover:scale-100
                            transition-all duration-500">
              <SpotlightButton
                bgColor="bg-white"
                text="Have A Gallary"
                href="/services"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
