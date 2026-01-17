import { Mail, MapPin, Phone, Calendar } from "lucide-react";

const contactItems = [
  {
    icon: <Mail size={22} />,
    title: "Mail Us 24/7",
    subtitle: "contact@example.com",
    description:
      "We’re always here to answer your questions. Reach us anytime via email.",
  },
  {
    icon: <MapPin size={22} />,
    title: "Our Location",
    subtitle: "No:58 A, Madison Street, USA",
    description:
      "Find us in the heart of the city, easy to access from all main routes.",
  },
  {
    icon: <Phone size={22} />,
    title: "Call Us 24/7",
    subtitle: "+000-123-456-789",
    description:
      "Our support team is available day and night to assist you by phone.",
  },
  {
    icon: <Calendar size={22} />,
    title: "Working Days",
    subtitle: "Mon to Fri – 8am - 9pm",
    description:
      "We’re open Monday to Friday, 8am to 9pm. Closed on weekends.",
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
