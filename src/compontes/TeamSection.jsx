import { Share2 } from "lucide-react";

const team = [
  {
    name: "Hardy Heike",
    role: "Crop Specialist",
    image: "/image/team-img-2.jpg",
  },
  {
    name: "Nico Michael",
    role: "Agronomist Expert",
    image: "/image/team-img-02.jpg",
  },
  {
    name: "Robert Ludger",
    role: "Farm Systems Designer",
    image: "/image/team-img-3.jpg",
  },
  {
    name: "Milan Raffael",
    role: "Farm Technician",
    image: "/image/team-img-4.jpg",
  },
];

export default function TeamSection() {
  return (
    <section className=" py-20 px-4 md:px-10">
      
      {/* Heading */}
      <div className="text-center mb-14">
        <span className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-[#6b7a40]">
          <span className="h-[2px] w-5 bg-[#6b7a40]" />
          Trusted Team
        </span>

        <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-[#3f4f2a]">
          Our Farming Specialists
        </h2>
      </div>

      {/* Team Grid */}
      <div className="mx-auto grid max-w-[1540px] gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((member, index) => (
          <div key={index} className="group">
            
            {/* Image Card */}
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src={member.image}
                alt={member.name}
                className="h-[420px] w-full object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Share Button */}
              <button className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-lime-300 text-black shadow-md hover:bg-lime-400 transition cursor-pointer">
                <Share2 size={18} />
              </button>
            </div>

            {/* Text */}
            <div className="mt-5 text-left">
              <h3 className="text-lg font-semibold text-[#3f4f2a]">
                {member.name}
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
