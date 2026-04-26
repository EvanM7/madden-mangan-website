import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { SITE_URL, buildBreadcrumbJsonLd, jsonLdScript } from "@/lib/seo";

export const metadata = {
  title: "Careers & Apprenticeships | Madden & Mangan Construction Kerry",
  description:
    "Madden & Mangan Construction Ltd is looking for apprentices to join the team in Castleisland, Co. Kerry. Learn trades in building, roofing, slating and conservation work.",
  alternates: {
    canonical: "/careers",
  },
};

const roles = [
  {
    title: "Apprentice Carpenter & Joiner",
    description:
      "Learn the full range of carpentry work on live sites — from first-fix structural work through to second-fix finishing on new builds, commercial projects and restorations.",
  },
  {
    title: "Apprentice Bricklayer",
    description:
      "Train in blockwork, brickwork and traditional stone on sites across Kerry and Munster, including sensitive heritage projects where care and accuracy really matter.",
  },
  {
    title: "Apprentice Roofer & Slater",
    description:
      "Learn traditional natural slating alongside modern roofing systems — a rare opportunity to pick up skills in heritage slate work on protected buildings.",
  },
  {
    title: "General Construction Apprentice",
    description:
      "Broad exposure to the full range of work the company takes on, from new builds and conservation projects to day-to-day building work.",
  },
];

const whatYoullGet = [
  {
    title: "Real, varied work",
    description:
      "You'll be on live sites from day one, with the chance to work on everything from new builds to protected heritage structures.",
  },
  {
    title: "Traditional skills, properly taught",
    description:
      "The team has decades of experience in traditional trades. You'll learn the craft from people who care about doing it right.",
  },
  {
    title: "A proper apprenticeship",
    description:
      "We support SOLAS-registered apprenticeships and work with the apprentice to make sure the on-site experience matches what's needed for progression.",
  },
  {
    title: "A good team around you",
    description:
      "Tidy sites, clear communication and a crew who take pride in their work. You'll be treated well and expected to do the same.",
  },
];

const lookingFor = [
  "A good attitude and a willingness to learn",
  "Reliable timekeeping and a decent work ethic",
  "An interest in practical, hands-on work",
  "Ability to follow instructions and work as part of a team",
  "A full driving licence is a plus but not essential to start",
];

export default function CareersPage() {
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: "Home", url: SITE_URL },
    { name: "Careers", url: `${SITE_URL}/careers` },
  ]);

  return (
    <main id="main-content" className="min-h-screen bg-white text-stone-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(breadcrumb) }}
      />
      <Navbar />

      <section className="bg-stone-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
            Careers
          </p>
          <h1 className="mt-3 text-4xl font-bold md:text-6xl">
            Looking for apprentices to join the team
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-300">
            Madden &amp; Mangan Construction Ltd is taking on apprentices
            across the trades. If you&apos;re starting out and want to learn a
            craft properly — on real projects, with a team that takes pride in
            the work — we&apos;d like to hear from you.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:larry@mmcon.ie?subject=Apprenticeship%20Enquiry"
              className="rounded-md bg-white px-6 py-3 text-center text-sm font-semibold text-stone-900 transition hover:bg-stone-100"
            >
              Email Larry
            </a>
            <a
              href="tel:+353872787885"
              className="rounded-md border border-white px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Call 087 278 7885
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
            Opportunities
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Apprenticeships we&apos;re taking on
          </h2>
          <p className="mt-4 max-w-3xl text-stone-600">
            We&apos;re happy to hear from anyone with a genuine interest in
            the trades — the roles below are the areas we&apos;re actively
            looking to train apprentices in.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {roles.map((role) => (
              <div
                key={role.title}
                className="rounded-xl border border-stone-200 bg-stone-50 p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold">{role.title}</h3>
                <p className="mt-3 leading-7 text-stone-600">
                  {role.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
                What you&apos;ll get
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                A good place to learn the trade
              </h2>
              <p className="mt-4 text-stone-600">
                An apprenticeship should set you up for the rest of your
                career. Here&apos;s what we try to offer.
              </p>

              <div className="mt-8 space-y-5">
                {whatYoullGet.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border-l-4 border-red-800 bg-white p-5 shadow-sm"
                  >
                    <h3 className="text-base font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-stone-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
                What we&apos;re looking for
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                The right attitude counts for a lot
              </h2>
              <p className="mt-4 text-stone-600">
                No experience needed — we&apos;ll teach you the skills. What
                matters is the basics:
              </p>

              <ul className="mt-8 space-y-3">
                {lookingFor.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 rounded-xl border border-stone-200 bg-white p-4 shadow-sm"
                  >
                    <span
                      aria-hidden
                      className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-red-700"
                    />
                    <span className="text-sm leading-7 text-stone-700">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
            How to apply
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Getting in touch
          </h2>
          <p className="mt-4 text-stone-600">
            The easiest way is to drop Larry or Lee a call or an email with a
            short note about yourself — your name, where you&apos;re based,
            and what you&apos;d like to learn. A CV is welcome but not
            essential. We&apos;ll come back to you to arrange a chat.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-stone-200 bg-stone-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
                Larry Madden
              </p>
              <p className="mt-3 text-lg font-semibold">
                <a
                  href="tel:+353872787885"
                  className="text-stone-900 hover:text-red-800"
                >
                  087 278 7885
                </a>
              </p>
              <p className="mt-1 text-sm">
                <a
                  href="mailto:larry@mmcon.ie?subject=Apprenticeship%20Enquiry"
                  className="text-red-800 hover:underline"
                >
                  larry@mmcon.ie
                </a>
              </p>
            </div>
            <div className="rounded-xl border border-stone-200 bg-stone-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
                Lee Mangan
              </p>
              <p className="mt-3 text-lg font-semibold">
                <a
                  href="tel:+353872585186"
                  className="text-stone-900 hover:text-red-800"
                >
                  087 258 5186
                </a>
              </p>
              <p className="mt-1 text-sm">
                <a
                  href="mailto:lee@mmcon.ie?subject=Apprenticeship%20Enquiry"
                  className="text-red-800 hover:underline"
                >
                  lee@mmcon.ie
                </a>
              </p>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-red-800 hover:underline"
            >
              Or use the contact form <span aria-hidden>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-red-800">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                Interested in joining the team?
              </h2>
              <p className="mt-3 text-lg text-red-100">
                Get in touch — we&apos;d be glad to hear from you.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:larry@mmcon.ie?subject=Apprenticeship%20Enquiry"
                className="rounded-md bg-white px-6 py-3 text-center text-sm font-semibold text-red-800 transition hover:bg-stone-100"
              >
                Email Larry
              </a>
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
