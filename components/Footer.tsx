import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
        <div>
          <p className="text-lg font-semibold">Madden & Mangan Construction Ltd</p>
          <p className="mt-2 text-sm text-stone-400">
            Building contractors, roofers & slaters serving Munster from
            Castleisland, Co. Kerry.
          </p>
        </div>

        <div className="flex gap-6 text-sm text-stone-300">
          <Link href="/services" className="hover:text-white">
            Services
          </Link>
          <Link href="/projects" className="hover:text-white">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}