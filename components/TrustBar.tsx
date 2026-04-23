const items = [
  {
    title: "RIAI Conservation Accredited Partners",
    description:
      "Regular collaboration with RIAI Conservation Accredited architects on heritage projects.",
  },
  {
    title: "Fully Insured",
    description:
      "Full public liability and employers' liability insurance, with tax clearance on file.",
  },
  {
    title: "Heritage Experience",
    description:
      "Extensive work on protected structures within the Muckross Estate and beyond.",
  },
  {
    title: "Based in Kerry",
    description:
      "Castleisland-based team serving Kerry and the wider Munster region.",
  },
];

export default function TrustBar() {
  return (
    <section className="border-y border-stone-200 bg-stone-50">
      <div className="mx-auto max-w-6xl px-6 py-12 md:px-10">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex gap-3 rounded-lg border border-stone-200 bg-white p-4 shadow-sm"
            >
              <div
                aria-hidden
                className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-800 text-white"
              >
                &#10003;
              </div>
              <div>
                <p className="text-sm font-semibold text-stone-900">
                  {item.title}
                </p>
                <p className="mt-1 text-sm leading-6 text-stone-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
