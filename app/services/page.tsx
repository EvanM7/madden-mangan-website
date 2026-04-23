import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { services } from "@/lib/services";

export const metadata = {
  title:
    "Building, Roofing & Conservation Services | Madden & Mangan Construction Kerry",
  description:
    "Professional building contractors, roofers, slaters and conservation specialists serving Kerry and Munster. Contact Madden & Mangan for a quote.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <main id="main-content" className="min-h-screen bg-white text-stone-900">
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
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group overflow-hidden rounded-xl border border-stone-200 bg-white shadow-md transition hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold group-hover:text-red-800">
                    {service.shortTitle}
                  </h2>
                  <p className="mt-2 text-sm font-medium text-stone-500">
                    {service.tagline}
                  </p>
                  <p className="mt-4 leading-7 text-stone-600">
                    {service.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-red-800">
                    Read more <span aria-hidden>&rarr;</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-red-800">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                Looking for something specific?
              </h2>
              <p className="mt-3 text-lg text-red-100">
                Get in touch and we&apos;ll talk through the project with you.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-center text-sm font-semibold text-red-800 transition hover:bg-stone-100"
              >
                Contact us
              </Link>
              <a
                href="tel:+353872787885"
                className="rounded-md border border-white px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Call 087 278 7885
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
