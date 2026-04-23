import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-stone-900 text-white">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://picsum.photos/seed/mm-construction-hero/1920/1200"
          alt="Heritage stone building in the Irish countryside"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-900/70 to-stone-900/20" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center md:px-10 md:py-32">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-red-300">
            Building Contractors &bull; Roofers &amp; Slaters &bull;
            Conservation Specialists
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            Trusted construction and heritage restoration across Munster
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-stone-200">
            Madden &amp; Mangan Construction Ltd delivers high-quality building
            work, traditional craftsmanship, and specialist conservation
            services from Castleisland, Co. Kerry.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-md bg-red-800 px-6 py-3 text-center font-semibold text-white transition hover:bg-red-900"
            >
              Request a Quote
            </Link>

            <Link
              href="/projects"
              className="rounded-md border border-white/30 bg-white/5 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/15"
            >
              View Our Work
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-white/10 pt-6 text-sm text-stone-200 sm:grid-cols-3 sm:gap-8">
            <div>
              <p className="text-2xl font-bold text-white">25+</p>
              <p className="mt-1 text-stone-300">Years&apos; experience</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">RIAI</p>
              <p className="mt-1 text-stone-300">
                Conservation Accredited partners
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">Munster</p>
              <p className="mt-1 text-stone-300">
                Serving Kerry &amp; Munster
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="rounded-2xl bg-white p-8 shadow-2xl">
            <Image
              src="/logo.jpg"
              alt="Madden & Mangan Construction Ltd logo"
              width={520}
              height={240}
              className="h-auto w-full max-w-md object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
