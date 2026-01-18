import { Mail, MapPin, Phone, Calendar } from "lucide-react";

const contactItems = [
  {
    icon: <Mail size={22} />,
    title: "Mail Us 24/7",
    subtitle: "support@yourcompany.in",
    description:
      "Have any questions or need support? Email us anytime and our team will get back to you quickly.",
  },
  {
    icon: <MapPin size={22} />,
    title: "Our Location",
    subtitle: "Malviya Nagar, Jaipur, Rajasthan 302017",
    description:
      "Visit our office in Malviya Nagar, Jaipur — a well-connected and easily accessible area.",
  },
  {
    icon: <Phone size={22} />,
    title: "Call Us 24/7",
    subtitle: "+91 98765 43210",
    description:
      "Our customer support team is available 24/7 to assist you with any queries or concerns.",
  },
  {
    icon: <Calendar size={22} />,
    title: "Working Hours",
    subtitle: "Monday to Saturday – 9:00 AM to 7:00 PM",
    description:
      "We are open from Monday to Saturday. Feel free to visit or contact us during working hours.",
  },
];

export default function ContactGrid() {
  return (
    <section className="bg-[#faf9f5] py-20 px-4">
      <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

        {contactItems.map((item, index) => (
          <div
            key={index}
            className="rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            {/* Icon */}
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#213e13] text-white">
              {item.icon}
            </div>

            {/* Content */}
            <h3 className="text-lg font-semibold text-gray-900">
              {item.title}
            </h3>
            <p className="mt-1 text-sm font-medium text-gray-600">
              {item.subtitle}
            </p>

            <p className="mt-4 text-sm text-gray-500 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}
