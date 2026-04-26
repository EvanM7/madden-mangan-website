import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-3 md:px-10">
        <div>
          <p className="text-lg font-semibold">
            Madden & Mangan Construction Ltd
          </p>
          <p className="mt-3 text-sm leading-7 text-stone-400">
            Cragg, Tralee Road
            <br />
            Castleisland
            <br />
            Co. Kerry
          </p>
          <p className="mt-4 text-sm text-stone-400">
            Building contractors, roofers &amp; conservation specialists serving
            Kerry and Munster.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-300">
            Contact
          </p>
          <ul className="mt-4 space-y-2 text-sm text-stone-300">
            <li>
              Larry:{" "}
              <a
                href="tel:+353872787885"
                className="hover:text-white hover:underline"
              >
                087 278 7885
              </a>
            </li>
            <li>
              Lee:{" "}
              <a
                href="tel:+353872585186"
                className="hover:text-white hover:underline"
              >
                087 258 5186
              </a>
            </li>
            <li>
              <a
                href="mailto:larry@mmcon.ie"
                className="hover:text-white hover:underline"
              >
                larry@mmcon.ie
              </a>
            </li>
            <li>
              <a
                href="mailto:lee@mmcon.ie"
                className="hover:text-white hover:underline"
              >
                lee@mmcon.ie
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-300">
            Site
          </p>
          <ul className="mt-4 space-y-2 text-sm text-stone-300">
            <li>
              <Link href="/services" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-white">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/areas" className="hover:text-white">
                Areas we cover
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-white">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-white">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-stone-800">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-xs text-stone-400 md:flex-row md:items-center md:justify-between md:px-10">
          <p>
            &copy; {currentYear} Madden &amp; Mangan Construction Ltd. All
            rights reserved.
          </p>
          <nav aria-label="Legal" className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/cookies" className="hover:text-white">
              Cookies
            </Link>
            <span aria-hidden className="hidden md:inline">
              &middot;
            </span>
            <span>Castleisland, Co. Kerry &middot; Serving Munster</span>
          </nav>
        </div>
      </div>
    </footer>
  );
}
