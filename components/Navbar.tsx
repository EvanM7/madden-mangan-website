"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 md:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
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
        <nav className="hidden gap-6 md:flex">
          <Link href="/services" className="text-sm font-medium text-stone-700 hover:text-stone-900">
            Services
          </Link>
          <Link href="/projects" className="text-sm font-medium text-stone-700 hover:text-stone-900">
            Projects
          </Link>
          <Link href="/about" className="text-sm font-medium text-stone-700 hover:text-stone-900">
            About
          </Link>
          <Link href="/careers" className="text-sm font-medium text-stone-700 hover:text-stone-900">
            Careers
          </Link>
          <Link href="/faq" className="text-sm font-medium text-stone-700 hover:text-stone-900">
            FAQ
          </Link>
          <Link href="/contact" className="text-sm font-medium text-stone-700 hover:text-stone-900">
            Contact
          </Link>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+353872787885"
            aria-label="Call Larry on 087 278 7885"
            className="rounded-md border border-stone-300 px-3 py-2 text-sm font-semibold text-stone-800 transition hover:border-red-800 hover:text-red-800"
          >
            087 278 7885
          </a>
          <Link
            href="/contact"
            className="rounded-md bg-red-800 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-900"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile click-to-call + menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href="tel:+353872787885"
            aria-label="Call Larry on 087 278 7885"
            className="rounded-md bg-red-800 px-3 py-2 text-xs font-semibold text-white transition hover:bg-red-900"
          >
            Call
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-stone-900"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
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
        <div className="border-t border-stone-200 bg-white md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            <Link
              href="/services"
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-stone-800"
            >
              Services
            </Link>

            <Link
              href="/projects"
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-stone-800"
            >
              Projects
            </Link>

            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-stone-800"
            >
              About
            </Link>

            <Link
              href="/careers"
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-stone-800"
            >
              Careers
            </Link>

            <Link
              href="/faq"
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-stone-800"
            >
              FAQ
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-stone-800"
            >
              Contact
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 rounded-md bg-red-800 px-4 py-3 text-center font-semibold text-white"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
