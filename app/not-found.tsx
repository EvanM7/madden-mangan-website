import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Page Not Found | Madden & Mangan Construction Ltd",
  description:
    "Sorry — the page you're looking for couldn't be found. Head back to the Madden & Mangan Construction homepage or browse our services.",
  robots: {
    index: false,
    follow: true,
  },
};

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function NotFound() {
  return (
    <main id="main-content" className="min-h-screen bg-white text-stone-900">
      <Navbar />

      <section className="bg-stone-900 text-white">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center md:px-10 md:py-32">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
            404
          </p>
          <h1 className="mt-3 text-4xl font-bold md:text-6xl">
            Page not found
          </h1>
          <p className="mt-6 text-lg leading-8 text-stone-300">
            The page you&apos;re looking for doesn&apos;t exist, or may have
            moved. Try one of the links below — or get in touch and we&apos;ll
            point you in the right direction.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-100"
            >
              Back to homepage
            </Link>
            <Link
              href="/contact"
              className="rounded-md border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16 md:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
            Quick links
          </p>
          <h2 className="mt-3 text-2xl font-bold md:text-3xl">
            Where would you like to go?
          </h2>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center justify-between rounded-lg border border-stone-200 bg-stone-50 px-5 py-4 text-stone-800 transition hover:border-red-800 hover:text-red-800"
                >
                  <span className="font-semibold">{link.label}</span>
                  <span aria-hidden>&rarr;</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  );
}
