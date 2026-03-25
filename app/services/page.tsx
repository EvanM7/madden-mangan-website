import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const services = [
  {
    title: "Building Contractors",
    description:
      "Professional building services delivered with care, experience, and attention to detail across residential and specialist projects.",
  },
  {
    title: "Roofers & Slaters",
    description:
      "Reliable roofing and slating work completed to a high standard using proven techniques and quality workmanship.",
  },
  {
    title: "Restoration & Conservation Work",
    description:
      "Extensive experience working alongside RIAI Conservation Accredited architects on heritage and conservation-focused projects.",
  },
  {
    title: "General Building Work",
    description:
      "Dependable construction services for a wide range of building needs across Munster.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-stone-900">
      <Navbar />

      <section className="bg-stone-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
            Our Services
          </p>
          <h1 className="mt-3 text-4xl font-bold md:text-6xl">
            Professional building, roofing, and restoration services
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-300">
            Madden & Mangan Construction Ltd provides dependable construction
            services across Munster, combining traditional skills with
            high-quality workmanship.
          </p>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm"
              >
                <h2 className="text-xl font-semibold">{service.title}</h2>
                <p className="mt-3 leading-7 text-stone-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}