import { Leaf } from "lucide-react";

export default function ContactFormSection() {
  return (
    <section className="max-w-[1530px] mx-auto px-6 relative overflow-hidden rounded-3xl bg-transparent">
      {/* Background Image */}
      <div
        className="h-[650px] w-full bg-cover bg-center rounded-3xl"
        style={{ backgroundImage: "url('/image/bg-form-img-1.jpg')" }}
      >
        {/* Overlay */}
{/* Overlay */}
  {/* Overlay – sirf image ke andar */}
  <div className="absolute inset-0 bg-black/10 rounded-3xl" style={{
    left:'1.50%',
    width:'1485px'
  }}/>
        {/* Content */}
        <div className="relative z-10 flex h-full items-center px-4 mb:justify-center">
          <div className="max-w-xl rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/20 text-white">

            {/* Header */}
            <span className="mb-2 inline-flex items-center gap-2 text-xs uppercase tracking-wide text-lime-300">
              <Leaf size={14} /> Quick Help
            </span>

            <h2 className="mb-6 text-3xl font-semibold">
              Need Assistance ?
            </h2>

            {/* Form */}
            <form className="grid gap-4">

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Name*"
                  className="form-input"
                />
                <input
                  type="email"
                  placeholder="Email Id*"
                  className="form-input"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <select className="form-input">
                  <option>Project Type*</option>
                  <option>Organic Farming</option>
                  <option>Agro Export</option>
                  <option>Consultation</option>
                </select>

                <select className="form-input">
                  <option>Select Your Budget*</option>
                  <option>Below $1,000</option>
                  <option>$1,000 - $5,000</option>
                  <option>$5,000+</option>
                </select>
              </div>

              <textarea
                rows="4"
                placeholder="Message*"
                className="form-input resize-none"
              />

              {/* Button */}
              <button
                type="submit"
                className="mt-2 inline-flex w-fit items-center gap-2 rounded-xl bg-lime-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-lime-300"
              >
                <Leaf size={16} />
                Submit Query
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}
