import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Privacy Policy | Madden & Mangan Construction Kerry",
  description:
    "Privacy policy for Madden & Mangan Construction Ltd — how we handle personal information submitted through the website and how to contact us with any questions.",
  alternates: {
    canonical: "/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const lastUpdated = "April 2026";

export default function PrivacyPage() {
  return (
    <main id="main-content" className="min-h-screen bg-white text-stone-900">
      <Navbar />

      <section className="bg-stone-900 text-white">
        <div className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
            Legal
          </p>
          <h1 className="mt-3 text-3xl font-bold md:text-5xl">Privacy policy</h1>
          <p className="mt-4 text-sm text-stone-300">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 md:px-10">
          <div className="space-y-8 text-base leading-8 text-stone-700">
            <div>
              <h2 className="text-xl font-semibold text-stone-900">
                Who we are
              </h2>
              <p className="mt-3">
                This privacy policy explains how Madden &amp; Mangan
                Construction Ltd (&ldquo;we&rdquo;, &ldquo;us&rdquo;) collects
                and uses personal information when you contact us through this
                website. Our registered office is Cragg, Tralee Road,
                Castleisland, Co. Kerry, Ireland.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-stone-900">
                What information we collect
              </h2>
              <p className="mt-3">
                When you send an enquiry through the contact form, call us or
                email us, we collect the information you choose to share. This
                typically includes your name, phone number, email address and
                any details about the project you&apos;d like us to help with.
              </p>
              <p className="mt-3">
                We do not collect special category data, and we do not ask for
                payment details through the website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-stone-900">
                Why we use it
              </h2>
              <p className="mt-3">
                We use your information to respond to your enquiry, provide
                quotes, arrange site visits, and carry out any work you
                subsequently engage us to do. We may also retain basic records
                for accounting, tax and regulatory purposes as required by
                Irish law.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-stone-900">
                Who we share it with
              </h2>
              <p className="mt-3">
                We don&apos;t sell your personal information. We may share it
                with professional advisors (such as architects, engineers or
                conservation consultants) where necessary to deliver the work
                you&apos;ve asked us to carry out, and with service providers
                who help us run the business (for example email or hosting
                providers) under appropriate confidentiality obligations.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-stone-900">
                How long we keep it
              </h2>
              <p className="mt-3">
                We keep enquiry and project information only for as long as is
                necessary for the purposes described above, or as required by
                law. Enquiries that don&apos;t lead to a project are deleted
                or anonymised after a reasonable period.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-stone-900">
                Your rights
              </h2>
              <p className="mt-3">
                Under the General Data Protection Regulation (GDPR) and Irish
                data protection law you have the right to access, correct or
                delete the personal information we hold about you, and to
                object to or restrict certain processing. To exercise any of
                these rights, please contact us at{" "}
                <a
                  href="mailto:larry@mmcon.ie"
                  className="font-semibold text-red-800 hover:underline"
                >
                  larry@mmcon.ie
                </a>
                .
              </p>
              <p className="mt-3">
                You also have the right to lodge a complaint with the Irish
                Data Protection Commission (
                <a
                  href="https://www.dataprotection.ie"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-red-800 hover:underline"
                >
                  dataprotection.ie
                </a>
                ) if you&apos;re unhappy with how we&apos;ve handled your
                information.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-stone-900">Cookies</h2>
              <p className="mt-3">
                For information about how this website uses cookies, see our{" "}
                <Link
                  href="/cookies"
                  className="font-semibold text-red-800 hover:underline"
                >
                  cookies policy
                </Link>
                .
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-stone-900">
                Contact us
              </h2>
              <p className="mt-3">
                If you have any questions about this policy or how we use your
                information, please contact Larry Madden at{" "}
                <a
                  href="mailto:larry@mmcon.ie"
                  className="font-semibold text-red-800 hover:underline"
                >
                  larry@mmcon.ie
                </a>{" "}
                or on{" "}
                <a
                  href="tel:+353872787885"
                  className="font-semibold text-red-800 hover:underline"
                >
                  087 278 7885
                </a>
                .
              </p>
            </div>

            <p className="text-sm text-stone-500">
              This policy is a general template and does not constitute legal
              advice. If you have specific compliance requirements, please
              consult a solicitor.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
