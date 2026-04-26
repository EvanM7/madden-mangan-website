import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { SITE_URL, buildBreadcrumbJsonLd, jsonLdScript } from "@/lib/seo";

export const metadata = {
  title: "Contact Madden & Mangan Construction | Kerry Building Contractors",
  description:
    "Get in touch with Madden & Mangan Construction Ltd in Castleisland, Co. Kerry. Call Larry on 087 278 7885 or Lee on 087 258 5186 for a quote.",
};

export default function ContactPage() {
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: "Home", url: SITE_URL },
    { name: "Contact", url: `${SITE_URL}/contact` },
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
            Contact Us
          </p>
          <h1 className="mt-3 text-4xl font-bold md:text-6xl">
            Get in touch about your project
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-300">
            Madden & Mangan Construction Ltd provides building, roofing, and
            specialist construction services across Munster.
          </p>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-stone-200 bg-white p-8 shadow-md hover:shadow-lg transition">
              <h2 className="text-2xl font-semibold">Contact Details</h2>

              <div className="mt-6 space-y-4 text-stone-700">
                <p>
                  <span className="font-semibold">Larry Madden:</span>{" "}
                  <a href="tel:+353872787885" className="text-red-800 hover:underline">
                    087 278 7885
                  </a>
                </p>

                <p>
                  <span className="font-semibold">Lee Mangan:</span>{" "}
                  <a href="tel:+353872585186" className="text-red-800 hover:underline">
                    087 258 5186
                  </a>
                </p>

                <p>
                  <span className="font-semibold">Larry Email:</span>{" "}
                  <a
                    href="mailto:larry@mmcon.ie"
                    className="text-red-800 hover:underline"
                  >
                    larry@mmcon.ie
                  </a>
                </p>

                <p>
                  <span className="font-semibold">Lee Email:</span>{" "}
                  <a
                    href="mailto:lee@mmcon.ie"
                    className="text-red-800 hover:underline"
                  >
                    lee@mmcon.ie
                  </a>
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-red-800 p-8 text-white shadow-md hover:shadow-lg transition">
              <h2 className="text-2xl font-semibold">Business Address</h2>
              <p className="mt-6 leading-8 text-red-100">
                Madden & Mangan Construction Ltd
                <br />
                Cragg, Tralee Road
                <br />
                Castleisland
                <br />
                Co. Kerry
              </p>

              <p className="mt-8 leading-7 text-red-100">
                Serving clients across Munster with professional building,
                roofing, and restoration services.
              </p>
            </div>
          </div>

          <div className="mt-12 rounded-xl border border-stone-200 bg-white p-8 shadow-md">
            <h2 className="text-2xl font-semibold">Send Us an Enquiry</h2>
            <p className="mt-2 text-stone-600">
              Fill in the form below and we will get back to you as soon as
              possible.
            </p>

            <form className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="mb-2 text-sm font-semibold text-stone-800"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="rounded-md border border-stone-300 bg-white px-4 py-3 text-stone-900 outline-none focus:border-red-800 focus:ring-2 focus:ring-red-800/20"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="phone"
                  className="mb-2 text-sm font-semibold text-stone-800"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="rounded-md border border-stone-300 bg-white px-4 py-3 text-stone-900 outline-none focus:border-red-800 focus:ring-2 focus:ring-red-800/20"
                />
              </div>

              <div className="flex flex-col md:col-span-2">
                <label
                  htmlFor="email"
                  className="mb-2 text-sm font-semibold text-stone-800"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="rounded-md border border-stone-300 bg-white px-4 py-3 text-stone-900 outline-none focus:border-red-800 focus:ring-2 focus:ring-red-800/20"
                />
              </div>

              <div className="flex flex-col md:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-2 text-sm font-semibold text-stone-800"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="rounded-md border border-stone-300 bg-white px-4 py-3 text-stone-900 outline-none focus:border-red-800 focus:ring-2 focus:ring-red-800/20"
                />
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="rounded-md bg-red-800 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-900"
                >
                  Send Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}