import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import Testimonials from "@/components/Testimonials";
import TrustBar from "@/components/TrustBar";
import { areas as allAreas } from "@/lib/areas";
import { projects as featuredProjects } from "@/lib/projects";
import { services as allServices } from "@/lib/services";

export const metadata = {
  title:
    "Madden & Mangan Construction Ltd | Building Contractors Kerry & Munster",
  description:
    "Madden & Mangan Construction Ltd are experienced building contractors, roofers and conservation specialists based in Castleisland, Co. Kerry, serving clients across Munster.",
};

const servicesOnHome = allServices.slice(0, 3);
const projectsOnHome = featuredProjects.slice(0, 3);

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-white text-stone-900">
      <Navbar />
      <Hero />
      <TrustBar />

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

        <div className="mx-auto max-w-6xl px-6 pb-16 md:px-10">
          <p className="max-w-4xl text-base leading-8 text-stone-600 md:text-lg">
            Madden & Mangan Construction Ltd has built a strong reputation
            across Kerry and Munster for delivering high quality building work
            with care and professionalism. From new build homes and commercial
            projects to specialist conservation and heritage restoration, the
            company brings traditional craftsmanship and modern construction
            expertise to every project. Based in Castleisland, Co. Kerry, the
            team works closely with clients, architects and conservation
            bodies to deliver work that stands the test of time.
          </p>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
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
            {servicesOnHome.map((service, i) => (
              <Reveal key={service.slug} delay={i * 80}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group block h-full overflow-hidden rounded-xl border border-stone-200 bg-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold group-hover:text-red-800">
                      {service.shortTitle}
                    </h3>
                    <p className="mt-3 text-stone-600">{service.summary}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-red-800">
                      Read more <span aria-hidden className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
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
            {projectsOnHome.map((project, i) => (
              <Reveal key={project.slug} delay={i * 80}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block h-full overflow-hidden rounded-xl border border-stone-200 bg-stone-50 shadow-md transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold group-hover:text-red-800">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm uppercase tracking-wide text-stone-500">
                      {project.location}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-stone-600">
                      {project.shortDescription}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-50 border-t border-stone-200">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
                Areas We Cover
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Kerry is our patch
              </h2>
              <p className="mt-4 max-w-2xl text-stone-600">
                Based in Castleisland, we work across Kerry on new builds,
                roofing and conservation projects — from Killarney to the
                Dingle Peninsula and up through North Kerry.
              </p>
            </div>

            <Link
              href="/areas"
              className="rounded-md border border-red-800 px-5 py-3 text-sm font-semibold text-red-800 transition hover:bg-red-50"
            >
              All Areas
            </Link>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {allAreas.map((area, i) => (
              <Reveal key={area.slug} delay={i * 40}>
                <Link
                  href={`/areas/${area.slug}`}
                  className="group flex items-center justify-between rounded-xl border border-stone-200 bg-white px-5 py-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-red-800 hover:shadow-md"
                >
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                      {area.county}
                    </p>
                    <p className="mt-1 text-lg font-semibold group-hover:text-red-800">
                      {area.name}
                    </p>
                  </div>
                  <span
                    aria-hidden
                    className="text-red-800 transition-transform group-hover:translate-x-1"
                  >
                    &rarr;
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
              Our Process
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              How we work from first call to handover
            </h2>
            <p className="mt-4 text-lg leading-8 text-stone-300">
              A straightforward approach that keeps clients informed and the
              project on track from start to finish.
            </p>
          </div>

          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Initial call",
                description:
                  "Tell us about the project. We talk it through and agree next steps — usually a site visit.",
              },
              {
                step: "02",
                title: "Site visit & quote",
                description:
                  "We come out, look at the work in person, and come back with a realistic quote and programme.",
              },
              {
                step: "03",
                title: "Planning & build",
                description:
                  "Once we're engaged, we coordinate with your design team and deliver the work to programme.",
              },
              {
                step: "04",
                title: "Handover & aftercare",
                description:
                  "Tidy finish, a proper handover, and we're there afterwards if anything needs attention.",
              },
            ].map((item, i) => (
              <Reveal key={item.step} as="li" delay={i * 100}>
                <div className="relative h-full rounded-xl border border-stone-800 bg-stone-800/40 p-6 transition duration-300 hover:border-red-400/60 hover:bg-stone-800/60">
                  <p className="text-4xl font-bold text-red-400">{item.step}</p>
                  <h3 className="mt-3 text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-stone-300">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <Testimonials />

      <section className="bg-red-800">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
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