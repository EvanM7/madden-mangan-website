import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectGallery from "@/components/ProjectGallery";
import { getProjectBySlug, projects } from "@/lib/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Madden & Mangan Construction Ltd",
    };
  }

  return {
    title: `${project.title} | Madden & Mangan Construction Kerry`,
    description: project.summary,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | Madden & Mangan Construction`,
      description: project.summary,
      images: [project.image],
      type: "article",
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const otherProjects = projects.filter((p) => p.slug !== project.slug);

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
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: `https://www.mmcon.ie/projects/${project.slug}`,
      },
    ],
  };

  const galleryJsonLd = project.gallery.length
    ? {
        "@context": "https://schema.org",
        "@type": "ImageGallery",
        name: `${project.title} — project gallery`,
        about: project.title,
        image: [project.image, ...project.gallery.map((g) => g.src)].map(
          (url) => ({
            "@type": "ImageObject",
            contentUrl: url,
            url,
          })
        ),
      }
    : null;

  return (
    <main id="main-content" className="min-h-screen bg-white text-stone-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {galleryJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(galleryJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      )}
      <Navbar />

      <section className="relative bg-stone-900 text-white">
        <div className="absolute inset-0">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-red-300 hover:text-white"
          >
            <span aria-hidden>&larr;</span> Back to Projects
          </Link>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-red-300">
            Project
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-tight md:text-6xl">
            {project.title}
          </h1>
          <p className="mt-4 text-lg text-stone-200">{project.location}</p>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-200">
            {project.summary}
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-3 md:px-10">
          <div className="md:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
              About this project
            </p>
            <h2 className="mt-3 text-2xl font-bold md:text-3xl">
              Traditional craftsmanship, delivered with care
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-stone-700">
              {project.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>

          <aside className="md:pl-6">
            <div className="rounded-xl border border-stone-200 bg-stone-50 p-6 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
                Project details
              </h3>
              <dl className="mt-4 space-y-4 text-sm">
                {project.details.map((detail) => (
                  <div key={detail.label}>
                    <dt className="font-semibold text-stone-900">
                      {detail.label}
                    </dt>
                    <dd className="mt-1 text-stone-700">{detail.value}</dd>
                  </div>
                ))}
              </dl>

              <Link
                href="/contact"
                className="mt-6 block rounded-md bg-red-800 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-red-900"
              >
                Discuss a similar project
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {project.gallery.length > 0 && (
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-6 pb-20 md:px-10">
            <div className="border-t border-stone-200 pt-16">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
                Gallery
              </p>
              <h2 className="mt-3 text-2xl font-bold md:text-3xl">
                Images from the project
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-stone-600">
                Click any image to enlarge. Use the arrow keys to move between
                images, or press Escape to close.
              </p>

              <div className="mt-8">
                <ProjectGallery images={project.gallery} />
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
                Other Projects
              </p>
              <h2 className="mt-3 text-2xl font-bold md:text-3xl">
                More completed work
              </h2>
            </div>
            <Link
              href="/projects"
              className="text-sm font-semibold text-red-800 hover:underline"
            >
              View all projects &rarr;
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {otherProjects.slice(0, 3).map((other) => (
              <Link
                key={other.slug}
                href={`/projects/${other.slug}`}
                className="group overflow-hidden rounded-xl border border-stone-200 bg-white shadow-md transition hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                  <Image
                    src={other.image}
                    alt={other.imageAlt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold group-hover:text-red-800">
                    {other.title}
                  </h3>
                  <p className="mt-2 text-sm text-stone-600">
                    {other.location}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
