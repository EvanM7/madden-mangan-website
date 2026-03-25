import Link from "next/link";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Madden & Mangan Construction Ltd | Building Contractors Munster",
  description:
    "Madden & Mangan Construction Ltd are experienced building contractors, roofers and slaters serving Munster from Castleisland, Co. Kerry.",
};

const services = [
  "Building Contractors",
  "Roofing & Slating",
  "Restoration & Conservation Work",
];

const projects = [
  "Muckross Glass House, Killarney, Co. Kerry",
  "Muckross Gate Lodge, Killarney, Co. Kerry",
  "Derrycunnihy Church, Killarney, Co. Kerry",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-stone-900">
      <Navbar />
      <Hero />

      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-3 md:px-10">
          <div>
            <h2 className="text-xl font-semibold">Traditional Building Skills</h2>
            <p className="mt-3 text-stone-600">
              Madden & Mangan Construction Ltd is well versed in traditional
              building methods and delivers high-quality workmanship across a
              wide range of projects.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Conservation Experience</h2>
            <p className="mt-3 text-stone-600">
              The company has extensive experience working with RIAI
              Conservation Accredited architects on restoration and heritage
              work.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Serving Munster</h2>
            <p className="mt-3 text-stone-600">
              Based in Castleisland, Co. Kerry, the company provides reliable
              construction services across Munster with a practical and
              professional approach.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
                Services
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Professional building and roofing services
              </h2>
              <p className="mt-4 max-w-2xl text-stone-600">
                From general building work to specialist restoration and roofing,
                Madden & Mangan Construction Ltd delivers dependable work to a
                high standard.
              </p>
            </div>

            <Link
              href="/services"
              className="rounded-md bg-red-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-900"
            >
              View All Services
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold">{service}</h3>
                <p className="mt-3 text-stone-600">
                  High-quality work carried out with care, experience, and
                  attention to detail.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
                Selected Projects
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Experience across notable and specialist projects
              </h2>
              <p className="mt-4 max-w-2xl text-stone-600">
                The company has worked on a range of projects in Kerry,
                including restoration and conservation-focused work.
              </p>
            </div>

            <Link
              href="/projects"
              className="rounded-md border border-red-800 px-5 py-3 text-sm font-semibold text-red-800 transition hover:bg-red-50"
            >
              View Projects
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project}
                className="rounded-xl border border-stone-200 bg-stone-50 p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold">{project}</h3>
                <p className="mt-3 text-stone-600">
                  A project reflecting the company’s experience in quality
                  construction and specialist work.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-red-800">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-200">
              Contact Us
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              Get in touch about your project
            </h2>
            <p className="mt-4 text-lg text-red-100">
              Serving clients across Munster with professional building,
              roofing, and restoration services.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
  <a
    href="tel:+353872787885"
    className="rounded-md bg-white px-6 py-4 text-center font-semibold text-red-800 transition hover:bg-stone-100"
  >
    Call Larry: 087 278 7885
  </a>

  <a
    href="tel:+353872585186"
    className="rounded-md bg-white px-6 py-4 text-center font-semibold text-red-800 transition hover:bg-stone-100"
  >
    Call Lee: 087 258 5186
  </a>

  <Link
    href="/contact"
    className="rounded-md border border-white px-6 py-4 text-center font-semibold text-white transition hover:bg-white/10 sm:col-span-2"
  >
    Contact Page
  </Link>
</div>
        </div>
      </section>

      <Footer />
    </main>
  );
}