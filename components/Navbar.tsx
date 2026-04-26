"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_ITEMS = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/areas", label: "Areas" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

function isActive(pathname: string | null, href: string) {
  if (!pathname) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 md:px-10">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-2"
        >
          <Image
            src="/logo.jpg"
            alt="Madden & Mangan Construction Ltd logo"
            width={120}
            height={60}
            className="h-12 w-auto object-contain"
            priority
          />
          <span className="hidden text-sm font-bold leading-tight text-stone-900 sm:block">
            Madden & Mangan
            <br />
            Construction Ltd
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden gap-6 md:flex" aria-label="Primary">
          {NAV_ITEMS.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={[
                  "rounded-sm text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-2",
                  active
                    ? "text-red-800 underline decoration-2 underline-offset-[6px]"
                    : "text-stone-700 hover:text-stone-900",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+353872787885"
            aria-label="Call Larry on 087 278 7885"
            className="rounded-md border border-stone-300 px-3 py-2 text-sm font-semibold text-stone-800 transition hover:border-red-800 hover:text-red-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-2"
          >
            087 278 7885
          </a>
          <Link
            href="/contact"
            className="rounded-md bg-red-800 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile click-to-call + menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href="tel:+353872787885"
            aria-label="Call Larry on 087 278 7885"
            className="rounded-md bg-red-800 px-3 py-2 text-xs font-semibold text-white transition hover:bg-red-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
          >
            Call
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-md p-1 text-stone-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-700"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
              aria-hidden
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          id="mobile-nav"
          className="border-t border-stone-200 bg-white md:hidden"
        >
          <nav
            aria-label="Primary"
            className="flex flex-col gap-1 px-6 py-4"
          >
            {NAV_ITEMS.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={[
                    "rounded-md px-2 py-3 text-base font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-red-700",
                    active
                      ? "bg-red-50 text-red-800"
                      : "text-stone-800 hover:bg-stone-50",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 rounded-md bg-red-800 px-4 py-3 text-center font-semibold text-white transition hover:bg-red-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
