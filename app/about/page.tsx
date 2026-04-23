import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title:
    "About Us | Madden & Mangan Construction Kerry",
  description:
    "Madden & Mangan Construction Ltd is a family-run building and conservation contractor based in Castleisland, Co. Kerry, serving clients across Munster with traditional skills and modern construction expertise.",
  alternates: {
    canonical: "/about",
  },
};

const values = [
  {
    title: "Craftsmanship",
    description:
      "We take pride in doing the job properly — from the first course of blocks to the last ridge tile. Traditional skills, good materials and careful detailing are what we stand over.",
  },
  {
    title: "Communication",
    description:
      "Clients, architects and design teams all need the same thing from a contractor: clear, honest communication. We keep everyone informed and flag issues early rather than late.",
  },
  {
    title: "Reliability",
    description:
      "Turn up when we say we will, keep the site tidy, and finish the job. It sounds simple, but it's the standard we hold ourselves to on every project.",
  },
  {
    title: "Respect for the building",
    description:
      "Especially on heritage and protected structures, the building itself comes first. We work to conservation guidance and take the time needed to get sensitive detail right.",
  },
];

const milestones = [
  {
    label: "Kerry roots",
    description:
      "Based in Castleisland, Co. Kerry, with deep connections across the county and the wider Munster region.",
  },
  {
    label: "Conservation experience",
    description:
      "Years of specialist work on protected structures, including projects within the Muckross Estate and Killarney National Park.",
  },
  {
    label: "Trusted by design teams",
    description:
      "Regularly engaged by RIAI Conservation Accredited architects, engineers and heritage consultants on sensitive projects.",
  },
  {
    label: "Full-service contractor",
    description:
      "From new builds and commercial construction to restoration, roofing and general building work — one team across the full scope.",
  },
];

export default function AboutPage() {
  return (
    <main id="main-content" className="min-h-screen bg-white text-stone-900">
      <Navbar />

      <section className="bg-stone-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
            About Us
          </p>
          <h1 className="mt-3 text-4xl font-bold md:text-6xl">
            A Kerry building &amp; conservation contractor
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-300">
            Madden &amp; Mangan Construction Ltd is a family-run building and
            conservation contractor based in Castleisland, Co. Kerry. We work
            across Munster on new builds, roofing and heritage restoration —
            with the same standards applied to every project, big or small.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:px-10 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
              Our Story
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Traditional skills, modern standards
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-stone-700">
              <p>
                Larry Madden and Lee Mangan set up the business with a simple
                idea: build well, look after the client, and take on the kind
                of work you can stand over years later. That principle still
                drives the company today.
              </p>
              <p>
                The team brings together experience across traditional natural
                slate roofing, lime-based conservation work, and everyday
                residential and commercial construction. It&apos;s a combination
                that means we can take a project from a straightforward new
                build right through to a sensitive restoration of a protected
                structure.
              </p>
              <p>
                We&apos;re proud of our base in Castleisland and the work we&apos;ve
                been trusted with across Kerry and the wider Munster region —
                from heritage buildings inside the Muckross Estate and
                Killarney National Park, to private homes, commercial
                properties and public sector projects.
              </p>
            </div>
          </div>

          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-stone-100 shadow-lg">
            <Image
              src="https://picsum.photos/seed/mm-about-team/1200/1500"
              alt="Traditional stone cottage being restored in the Kerry countryside"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
            What we stand for
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            The way we work
          </h2>
          <p className="mt-4 max-w-3xl text-stone-600">
            Every project is different, but the way we approach the work
            doesn&apos;t change.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold">{value.title}</h3>
                <p className="mt-3 leading-7 text-stone-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
            At a glance
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            What sets the company apart
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {milestones.map((milestone) => (
              <div
                key={milestone.label}
                className="rounded-xl border-l-4 border-red-800 bg-stone-50 p-6"
              >
                <h3 className="text-base font-semibold text-stone-900">
                  {milestone.label}
                </h3>
                <p className="mt-2 text-sm leading-7 text-stone-600">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-red-800">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                Have a project in mind?
              </h2>
              <p className="mt-3 text-lg text-red-100">
                We&apos;d be glad to hear about it. Call Larry or Lee directly,
                or send a quick enquiry through the contact page.
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
