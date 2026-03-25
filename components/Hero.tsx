import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-stone-900 text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:px-10">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
            Building Contractors • Roofers & Slaters
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            Trusted construction, roofing, and restoration work across Munster
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300">
            Madden & Mangan Construction Ltd delivers high-quality building
            work, traditional craftsmanship, and dependable service from its
            base in Castleisland, Co. Kerry.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-md bg-red-800 px-6 py-3 text-center font-semibold text-white transition hover:bg-red-900"
            >
              Request a Quote
            </Link>

            <Link
              href="/services"
              className="rounded-md border border-white/20 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/10"
            >
              View Services
            </Link>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="rounded-2xl bg-white p-6 shadow-2xl">
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