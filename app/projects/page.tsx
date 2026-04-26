import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/projects";

export const metadata = {
  title:
    "Construction & Restoration Projects | Madden & Mangan Construction Kerry",
  description:
    "View completed construction, roofing and conservation projects by Madden & Mangan Construction Ltd, including heritage restoration work in Killarney, Co. Kerry.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: projects.map((project, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://www.mmcon.ie/projects/${project.slug}`,
      name: project.title,
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.mmcon.ie",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: "https://www.mmcon.ie/projects",
      },
    ],
  };

  return (
    <main id="main-content" className="min-h-screen bg-white text-stone-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />

      <section className="bg-stone-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
            Selected Projects
          </p>
          <h1 className="mt-3 text-4xl font-bold md:text-6xl">
            Previous work and specialist project experience
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-300">
            The company has experience working on notable projects and alongside
            RIAI Conservation Accredited architects on restoration and
            conservation work.
          </p>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 80}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block h-full overflow-hidden rounded-xl border border-stone-200 bg-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-stone-100">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-semibold group-hover:text-red-800">
                      {project.title}
                    </h2>
                    <p className="mt-1 text-sm uppercase tracking-wide text-stone-500">
                      {project.location}
                    </p>
                    <p className="mt-3 leading-7 text-stone-600">
                      {project.shortDescription}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-red-800 group-hover:underline">
                      View project details
                      <span
                        aria-hidden
                        className="transition-transform group-hover:translate-x-0.5"
                      >
                        &rarr;
                      </span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
