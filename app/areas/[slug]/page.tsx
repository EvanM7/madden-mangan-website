import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { areas, getAreaBySlug } from "@/lib/areas";
import { getProjectBySlug } from "@/lib/projects";
import { getServiceBySlug } from "@/lib/services";
import { SITE_URL, buildBreadcrumbJsonLd, jsonLdScript } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return areas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = getAreaBySlug(slug);

  if (!area) {
    return {
      title: "Area Not Found | Madden & Mangan Construction Ltd",
    };
  }

  return {
    title: area.title,
    description: area.metaDescription,
    alternates: {
      canonical: `/areas/${area.slug}`,
    },
    openGraph: {
      title: area.title,
      description: area.metaDescription,
      images: [area.image],
      type: "article",
    },
  };
}

export default async function AreaDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);

  if (!area) {
    notFound();
  }

  const services = area.servicesHighlighted
    .map((s) => getServiceBySlug(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const relatedProjects = area.relatedProjectSlugs
    .map((p) => getProjectBySlug(p))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const otherAreas = areas.filter((a) => a.slug !== area.slug);

  const breadcrumb = buildBreadcrumbJsonLd([
    { name: "Home", url: SITE_URL },
    { name: "Areas", url: `${SITE_URL}/areas` },
    { name: area.name, url: `${SITE_URL}/areas/${area.slug}` },
  ]);

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: "Madden & Mangan Construction Ltd",
    url: `${SITE_URL}/areas/${area.slug}`,
    telephone: "+353872787885",
    email: "larry@mmcon.ie",
    image: area.image,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Cragg, Tralee Road",
      addressLocality: "Castleisland",
      addressRegion: "Co. Kerry",
      addressCountry: "IE",
    },
    areaServed: {
      "@type": "Place",
      name: `${area.name}, ${area.county}`,
    },
    description: area.metaDescription,
  };

  return (
    <main id="main-content" className="min-h-screen bg-white text-stone-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(localBusinessJsonLd) }}
      />

      <Navbar />

      <section className="relative bg-stone-900 text-white">
        <div className="absolute inset-0">
          <Image
            src={area.image}
            alt={area.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
          <Link
            href="/areas"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-red-300 hover:text-white"
          >
            <span aria-hidden>&larr;</span> All Areas
          </Link>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-red-300">
            {area.name}, {area.county}
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-tight md:text-6xl">
            {area.heroHeadline}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-200">
            {area.heroSubhead}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-md bg-red-800 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-red-900"
            >
              Get a quote
            </Link>
            <a
              href="tel:+353872787885"
              className="rounded-md border border-white/80 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Call 087 278 7885
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-3 md:px-10">
          <div className="md:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
              Working in {area.name}
            </p>
            <h2 className="mt-3 text-2xl font-bold md:text-3xl">
              A local team in {area.name}, {area.county}
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-stone-700">
              {area.intro.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 space-y-5 text-base leading-8 text-stone-700">
              {area.localContext.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>

          <aside className="md:pl-6">
            <div className="rounded-xl border border-stone-200 bg-stone-50 p-6 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
                At a glance
              </h3>
              <dl className="mt-4 space-y-4 text-sm">
                <div>
                  <dt className="font-semibold text-stone-900">Base</dt>
                  <dd className="mt-1 text-stone-700">
                    Castleisland, Co. Kerry
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-stone-900">
                    Area covered
                  </dt>
                  <dd className="mt-1 text-stone-700">
                    {area.name} &amp; surrounding parishes, {area.county}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-stone-900">Contact</dt>
                  <dd className="mt-1 text-stone-700">
                    Larry:{" "}
                    <a
                      href="tel:+353872787885"
                      className="text-red-800 hover:underline"
                    >
                      087 278 7885
                    </a>
                    <br />
                    Lee:{" "}
                    <a
                      href="tel:+353872585186"
                      className="text-red-800 hover:underline"
                    >
                      087 258 5186
                    </a>
                  </dd>
                </div>
              </dl>

              <Link
                href="/contact"
                className="mt-6 block rounded-md bg-red-800 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-red-900"
              >
                Enquire about {area.name}
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
            Services in {area.name}
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            What we take on locally
          </h2>
          <p className="mt-4 max-w-3xl text-stone-600">
            The full range of construction, roofing and conservation work we
            carry out across {area.name} and the surrounding area.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-stone-100">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold group-hover:text-red-800">
                    {service.shortTitle}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-stone-600">
                    {service.tagline}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
              Projects in the {area.name} area
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Recent work nearby
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {relatedProjects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="group overflow-hidden rounded-xl border border-stone-200 bg-white shadow-md transition hover:shadow-lg"
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
                    <p className="mt-2 text-sm text-stone-600">
                      {project.location}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
                Other areas we cover
              </p>
              <h2 className="mt-3 text-2xl font-bold md:text-3xl">
                Elsewhere across Kerry
              </h2>
            </div>
            <Link
              href="/areas"
              className="text-sm font-semibold text-red-800 hover:underline"
            >
              All areas &rarr;
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {otherAreas.map((other) => (
              <Link
                key={other.slug}
                href={`/areas/${other.slug}`}
                className="group rounded-xl border border-stone-200 bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
                  {other.county}
                </p>
                <p className="mt-2 text-lg font-semibold group-hover:text-red-800">
                  {other.name}
                </p>
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
                Project in {area.name}?
              </h2>
              <p className="mt-3 text-lg text-red-100">
                Call Larry or Lee directly, or drop us a quick note through the
                contact page.
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
