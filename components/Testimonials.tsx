const testimonials = [
  {
    quote:
      "Madden & Mangan carried out conservation work on our property to an exceptional standard. Professional from start to finish, and genuinely invested in doing the job properly.",
    attribution: "Private client, Killarney, Co. Kerry",
  },
  {
    quote:
      "Excellent craftsmanship on a sensitive heritage project. Good communication throughout and a real respect for traditional building methods.",
    attribution: "Conservation project, Co. Kerry",
  },
  {
    quote:
      "Reliable, tidy and dependable on site. A pleasure to deal with and the finished work speaks for itself.",
    attribution: "Private new build, Munster",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
            Client Feedback
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Trusted by private clients, architects and conservation bodies
          </h2>
          <p className="mt-4 text-stone-600">
            A reputation built on craftsmanship, communication and doing work
            to a standard that stands the test of time.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.attribution}
              className="flex h-full flex-col rounded-xl border border-stone-200 bg-stone-50 p-6 shadow-sm"
            >
              <svg
                aria-hidden
                className="h-8 w-8 text-red-800"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7.17 6A4.17 4.17 0 003 10.17V18h7.17v-7.17H6.83A3.34 3.34 0 0110.17 7.5V6H7.17zm10 0A4.17 4.17 0 0013 10.17V18h7.17v-7.17h-3.34A3.34 3.34 0 0120.17 7.5V6h-3z" />
              </svg>

              <blockquote className="mt-4 flex-1 text-base leading-7 text-stone-800">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <figcaption className="mt-6 text-sm font-semibold text-stone-600">
                &mdash; {t.attribution}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
