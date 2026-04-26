import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { SITE_URL, buildBreadcrumbJsonLd, jsonLdScript } from "@/lib/seo";

export const metadata = {
  title:
    "Frequently Asked Questions | Madden & Mangan Construction Kerry",
  description:
    "Common questions about building, roofing and conservation work carried out by Madden & Mangan Construction Ltd in Kerry and Munster — quotes, timelines, areas served and more.",
};

type Faq = { question: string; answer: string };

const faqs: Faq[] = [
  {
    question: "What areas do you cover?",
    answer:
      "Madden & Mangan Construction Ltd is based in Castleisland, Co. Kerry and regularly works across Kerry and the wider Munster region, including Cork, Limerick, Clare, Tipperary and Waterford. Projects outside this area are considered on a case-by-case basis — get in touch and we'll let you know.",
  },
  {
    question: "Do you work on heritage and protected structures?",
    answer:
      "Yes. The company has extensive experience working with RIAI Conservation Accredited architects on heritage and protected structures, including work within the Muckross Estate and Killarney National Park. This type of work is a core part of what we do and we take a careful, considered approach to it.",
  },
  {
    question: "Do you take on new builds?",
    answer:
      "Yes. Alongside conservation work, we carry out new build residential and commercial construction across Munster, as well as general contracting on larger projects. We manage every stage of the build, from site preparation through to finishing.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "The easiest way is to give Larry a call on 087 278 7885 or Lee on 087 258 5186. You can also fill in the enquiry form on our contact page with a short description of the work and we'll come back to you to arrange a site visit where needed.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines vary a lot depending on the scope of work, the type of building, planning and conservation requirements, and material lead times. After a site visit we can give you a realistic programme for your specific project, including key milestones.",
  },
  {
    question: "Are you fully insured?",
    answer:
      "Yes — the company holds full public liability and employers' liability insurance, along with the standard tax clearance and compliance documentation required for private, commercial and public sector work. Details can be provided on request.",
  },
  {
    question: "Do you carry out roofing repairs as well as full roofs?",
    answer:
      "Yes. We handle everything from small repairs and emergency patch-ups through to complete re-roofs and specialist slating on heritage and period buildings. Traditional natural slate roofs are a particular area of expertise.",
  },
  {
    question: "Can you work alongside my architect or engineer?",
    answer:
      "Yes — we work regularly with architects, conservation architects, engineers and heritage consultants, and we're comfortable taking our direction from the design team on a project. Clear communication with everyone involved is key to delivering a good result.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FaqPage() {
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: "Home", url: SITE_URL },
    { name: "FAQ", url: `${SITE_URL}/faq` },
  ]);

  return (
    <main id="main-content" className="min-h-screen bg-white text-stone-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(breadcrumb) }}
      />

      <Navbar />

      <section className="bg-stone-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
            FAQ
          </p>
          <h1 className="mt-3 text-4xl font-bold md:text-6xl">
            Frequently asked questions
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-300">
            A few of the questions we get asked most often. If you don&apos;t
            see your question below, get in touch and we&apos;ll be happy to
            help.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-10">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-stone-200 bg-white p-6 shadow-sm transition open:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-stone-900">
                  <span>{faq.question}</span>
                  <span
                    aria-hidden
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-stone-300 text-stone-600 transition group-open:rotate-45 group-open:border-red-800 group-open:text-red-800"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-7 text-stone-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-red-800">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                Still have a question?
              </h2>
              <p className="mt-3 text-lg text-red-100">
                Call Larry or Lee directly, or send a quick enquiry through the
                contact page.
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
