import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Services | Madden & Mangan Construction Ltd",
  description:
    "Professional building contractors, roofers & slaters providing construction and restoration services across Munster.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-stone-900">
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
            <div className="rounded-xl border border-stone-200 bg-white p-8 shadow-sm">
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

            <div className="rounded-xl bg-red-800 p-8 text-white shadow-sm">
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
        </div>
      </section>

      <Footer />
    </main>
  );
}