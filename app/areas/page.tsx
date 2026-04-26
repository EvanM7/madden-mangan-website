import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import { areas } from "@/lib/areas";
import { SITE_URL, buildBreadcrumbJsonLd, jsonLdScript } from "@/lib/seo";

export const metadata = {
  title: "Areas We Cover in Kerry | Madden & Mangan Construction",
  description:
    "Building, roofing and conservation contractors working across Kerry — Killarney, Tralee, Castleisland, Listowel, Dingle and Killorglin.",
  alternates: {
    canonical: "/areas",
  },
};

export default function AreasPage() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: areas.map((area, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/areas/${area.slug}`,
      name: area.name,
    })),
  };

  const breadcrumb = buildBreadcrumbJsonLd([
    { name: "Home", url: SITE_URL },
    { name: "Areas", url: `${SITE_URL}/areas` },
  ]);

  return (
    <main id="main-content" className="min-h-screen bg-white text-stone-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(breadcrumb) }}
      />
      <Navbar />

      <section className="bg-stone-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
            Areas We Cover
          </p>
          <h1 className="mt-3 text-4xl font-bold md:text-6xl">
            Working across Kerry
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-300">
            Madden &amp; Mangan Construction Ltd is based in Castleisland and
            works throughout Kerry. Here are the main areas we regularly take
            on projects in — from new builds to heritage restoration and
            everything in between.
          </p>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {areas.map((area, i) => (
              <Reveal key={area.slug} delay={i * 60}>
                <Link
                  href={`/areas/${area.slug}`}
                  className="group block h-full overflow-hidden rounded-xl border border-stone-200 bg-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                    <Image
                      src={area.image}
                      alt={area.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                      {area.county}
                    </p>
                    <h2 className="mt-2 text-xl font-semibold group-hover:text-red-800">
                      {area.name}
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-stone-600">
                      {area.heroSubhead}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-red-800">
                      View {area.name} page{" "}
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

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
            Outside these areas?
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            We&apos;ll consider projects across Kerry &amp; Munster
          </h2>
          <p className="mt-4 text-stone-600">
            The list above covers the parts of Kerry we work in most regularly,
            but it&apos;s not exhaustive. If you have a project elsewhere in
            Kerry, or across the wider Munster region, get in touch and
            we&apos;ll let you know if it&apos;s one we can help with.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-md bg-red-800 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-red-900"
            >
              Contact us
            </Link>
            <a
              href="tel:+353872787885"
              className="rounded-md border border-stone-300 px-6 py-3 text-center text-sm font-semibold text-stone-800 transition hover:border-red-800 hover:text-red-800"
            >
              Call 087 278 7885
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
