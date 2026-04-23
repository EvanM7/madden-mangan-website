import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getServiceBySlug, services } from "@/lib/services";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | Madden & Mangan Construction Ltd",
    };
  }

  return {
    title: `${service.title} | Madden & Mangan Construction Kerry`,
    description: service.summary,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | Madden & Mangan Construction`,
      description: service.summary,
      images: [service.image],
      type: "article",
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const otherServices = services.filter((s) => s.slug !== service.slug);

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
        name: "Services",
        item: "https://www.mmcon.ie/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.shortTitle,
        item: `https://www.mmcon.ie/services/${service.slug}`,
      },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    serviceType: service.shortTitle,
    areaServed: [
      { "@type": "AdministrativeArea", name: "Kerry" },
      { "@type": "AdministrativeArea", name: "Munster" },
      { "@type": "Country", name: "Ireland" },
    ],
    provider: {
      "@type": "GeneralContractor",
      name: "Madden & Mangan Construction Ltd",
      url: "https://www.mmcon.ie",
      telephone: "+353872787885",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Cragg, Tralee Road",
        addressLocality: "Castleisland",
        addressRegion: "Co. Kerry",
        addressCountry: "IE",
      },
    },
  };

  return (
    <main id="main-content" className="min-h-screen bg-white text-stone-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <Navbar />

      <section className="relative bg-stone-900 text-white">
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-red-300 hover:text-white"
          >
            <span aria-hidden>&larr;</span> Back to Services
          </Link>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-red-300">
            Service
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-tight md:text-6xl">
            {service.title}
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-stone-200">
            {service.tagline}
          </p>
          <p className="mt-6 max-w-3xl text-base leading-8 text-stone-300">
            {service.summary}
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-3 md:px-10">
          <div className="md:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
              About this service
            </p>
            <h2 className="mt-3 text-2xl font-bold md:text-3xl">
              What to expect
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-stone-700">
              {service.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>

          <aside className="md:pl-6">
            <div className="rounded-xl border border-stone-200 bg-stone-50 p-6 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
                What&apos;s included
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-stone-700">
                {service.includes.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      aria-hidden
                      className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-red-700"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="mt-6 block rounded-md bg-red-800 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-red-900"
              >
                Get a quote
              </Link>
              <a
                href="tel:+353872787885"
                className="mt-3 block rounded-md border border-stone-300 px-5 py-3 text-center text-sm font-semibold text-stone-800 transition hover:border-red-800 hover:text-red-800"
              >
                Call 087 278 7885
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
                Other Services
              </p>
              <h2 className="mt-3 text-2xl font-bold md:text-3xl">
                Related work we carry out
              </h2>
            </div>
            <Link
              href="/services"
              className="text-sm font-semibold text-red-800 hover:underline"
            >
              View all services &rarr;
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {otherServices.slice(0, 3).map((other) => (
              <Link
                key={other.slug}
                href={`/services/${other.slug}`}
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
                    {other.shortTitle}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-stone-600">
                    {other.tagline}
                  </p>
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
                Thinking about a project?
              </h2>
              <p className="mt-3 text-lg text-red-100">
                Give Larry or Lee a call, or send a quick enquiry through the
                contact page and we&apos;ll be in touch.
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
