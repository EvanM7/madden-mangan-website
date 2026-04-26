import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Cookies Policy | Madden & Mangan Construction Kerry",
  description:
    "How mmcon.ie uses cookies and similar technologies, and how you can manage your browser preferences.",
  alternates: {
    canonical: "/cookies",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const lastUpdated = "April 2026";

export default function CookiesPage() {
  return (
    <main id="main-content" className="min-h-screen bg-white text-stone-900">
      <Navbar />

      <section className="bg-stone-900 text-white">
        <div className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
            Legal
          </p>
          <h1 className="mt-3 text-3xl font-bold md:text-5xl">
            Cookies policy
          </h1>
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
                What are cookies?
              </h2>
              <p className="mt-3">
                Cookies are small text files stored on your device when you
                visit a website. They allow the site to recognise your device
                and remember certain information about your visit.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-stone-900">
                How we use cookies
              </h2>
              <p className="mt-3">
                mmcon.ie currently uses only the cookies that are strictly
                necessary for the site to function correctly. These do not
                track you across other sites, and do not require your consent
                under Irish and EU law.
              </p>
              <p className="mt-3">
                We do not currently use third-party analytics, advertising or
                marketing cookies. If we ever add them in the future, your
                choice in the consent banner below will apply.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-stone-900">
                Your consent
              </h2>
              <p className="mt-3">
                When you first visit the site, a small banner appears asking
                whether you accept the (currently strictly necessary) cookies.
                Your choice is stored in your browser&apos;s local storage so
                we don&apos;t ask you again on every page load.
              </p>
              <p className="mt-3">
                To change your choice later, clear the site&apos;s storage in
                your browser (or use the help pages below to clear cookies and
                site data for mmcon.ie) and the banner will reappear on your
                next visit.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-stone-900">
                Managing cookies in your browser
              </h2>
              <p className="mt-3">
                You can control and delete cookies at any time through your
                browser settings. Most browsers allow you to block or delete
                cookies entirely, though some features of websites may not
                work correctly if you do. Help pages for the main browsers:
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-6">
                <li>
                  <a
                    href="https://support.google.com/chrome/answer/95647"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-red-800 hover:underline"
                  >
                    Google Chrome
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.apple.com/en-ie/guide/safari/sfri11471/mac"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-red-800 hover:underline"
                  >
                    Apple Safari
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-red-800 hover:underline"
                  >
                    Mozilla Firefox
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.microsoft.com/en-us/windows/manage-cookies-in-microsoft-edge-168dab11-0753-043d-7c16-ede5947fc64d"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-red-800 hover:underline"
                  >
                    Microsoft Edge
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-stone-900">
                Related policies
              </h2>
              <p className="mt-3">
                See our{" "}
                <Link
                  href="/privacy"
                  className="font-semibold text-red-800 hover:underline"
                >
                  privacy policy
                </Link>{" "}
                for information on how we handle personal data more generally.
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
