"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "mmc-cookie-consent-v2";
type Consent = "accepted" | "declined";

export default function CookieConsent() {
  // null = haven't read storage yet (so render nothing during SSR + first paint)
  // "accepted"/"declined" = user has chosen, hide banner
  // "show" = user hasn't chosen, banner is visible
  const [state, setState] = useState<Consent | "show" | null>(null);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch {
      // ignore
    }

    if (stored === "accepted" || stored === "declined") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setState(stored);
    } else {
      setState("show");
    }
  }, []);

  const handleChoice = (choice: Consent) => {
    setState(choice);
    try {
      window.localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // ignore — UI will still hide for this session
    }
  };

  if (state !== "show") {
    return null;
  }

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed inset-x-3 bottom-3 z-[60] sm:inset-x-auto sm:right-4 sm:bottom-4 sm:max-w-md"
    >
      <div className="rounded-xl border border-stone-200 bg-white p-5 shadow-2xl ring-1 ring-stone-900/5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-stone-900">
              We respect your privacy
            </p>
            <p className="mt-2 text-sm leading-6 text-stone-600">
              This site only uses what&apos;s needed to run properly. We
              don&apos;t set tracking cookies. If we ever add analytics in the
              future, your choice here will apply.{" "}
              <Link
                href="/cookies"
                className="font-semibold text-red-800 underline-offset-2 hover:underline"
              >
                Read our cookie policy
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={() => handleChoice("accepted")}
            className="rounded-md bg-red-800 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
          >
            Accept
          </button>
          <button
            type="button"
            onClick={() => handleChoice("declined")}
            className="rounded-md border border-stone-300 px-4 py-2 text-sm font-semibold text-stone-800 transition hover:border-stone-400 hover:bg-stone-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-500 focus-visible:ring-offset-2"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
